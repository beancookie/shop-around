package cn.edu.jit.reptile.processor.jd;

import cn.edu.jit.reptile.config.Contents;
import cn.edu.jit.reptile.config.SpiderConfig;
import cn.edu.jit.reptile.pojo.DO.CommodityDO;
import cn.edu.jit.reptile.pojo.DO.PriceDO;
import cn.edu.jit.reptile.pojo.DTO.PriceDTO;
import cn.edu.jit.reptile.pojo.DTO.ShopDTO;
import cn.edu.jit.reptile.service.CommodityService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.processor.PageProcessor;
import us.codecraft.webmagic.selector.Html;
import us.codecraft.webmagic.selector.Selectable;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

/**
 * @author LuZhong
 */
@Component
@Slf4j
@RefreshScope
public class CommodityPageProcessor implements PageProcessor {
    public static final String FILE_KEY = "commodities";
    private static final String PROTOCOL = "https:";
    private static final String URL_REGEX = "https://list.jd.com/list.html\\?cat=.*&page=\\d+.*";
    @Autowired
    private SpiderConfig spiderConfig;

    @Autowired
    private CommodityService commodityService;

    private void processCommodity(Page page) {
        Html html = page.getHtml();
        List<Selectable> commodities = html.$(".gl-item").nodes();
        // 商品id以便获取商品价格
        List<String> ids = new LinkedList<>();
        // 店铺id以便获取店铺名称
        List<String> shopIds = new LinkedList<>();
        // 商品结果列表
        List<CommodityDO> resultCommodities = new LinkedList<>();
        // 商品列表
        String category = html.$(".s-title h3 b").xpath("//b/text()").get();
        commodities.forEach(commodity -> {
            CommodityDO resultCommodity = new CommodityDO();
            resultCommodity.setCategory(category);
            // id
            String commodityId = commodity.xpath("//li/div/@data-sku").get();
            resultCommodity.set_id(commodityId);
            ids.add(commodityId);
            // url
            String url = commodity.$(".p-img").xpath("//div/a/@href").get();
            if (!StringUtils.isEmpty(url)) {
                resultCommodity.setUrl(PROTOCOL + url);
            }
            // 店铺id
            String shopId = commodity.xpath("//li/div/@jdzy_shop_id").get();
            resultCommodity.setShopId(shopId);
            shopIds.add(shopId);
            // 图片url
            String imgUrl = commodity.$(".p-img").xpath("//div/a/img/@src").get();
            if (StringUtils.isEmpty(imgUrl)) {
                imgUrl = commodity.$(".p-img").xpath("//div/a/img/@data-lazy-img").get();
            }
            resultCommodity.setImgUrl(PROTOCOL + imgUrl);
            // 名称
            String name = commodity.$(".p-name").xpath("//div/a/em/text()").get().trim();
            resultCommodity.setName(name);
            // 店铺名称
            resultCommodities.add(resultCommodity);
        });
        // 通过异步接口获取商品价格
        Iterator<PriceDTO> priceIterator = commodityService.getPricesByIds(ids).iterator();
        // 通过异步接口获取商品店铺
        Iterator<ShopDTO> shopIterator = commodityService.getShopNamesByIds(shopIds).iterator();
        // 当前日期
        String nowDate = Contents.FORMATTER.format(LocalDateTime.now().minusDays(3));
        // 有序列表设置价格
        resultCommodities.forEach(commodity -> {
            if (priceIterator.hasNext()) {
                PriceDTO priceDTO = priceIterator.next();
                String priceId = priceDTO.getId().substring(2, priceDTO.getId().length());
                String id = commodity.get_id();
                // 价格id和商品id相同时设置价格
                if (id.equals(priceId)) {
                    commodity.addPrice(new PriceDO(priceDTO.getP(), nowDate));
                }
            }
            if (shopIterator.hasNext()) {
                ShopDTO shopDTO = shopIterator.next();
                commodity.setShopId(shopDTO.getVenderId());
                commodity.setShopName(shopDTO.getName());
            }
        });
        // 持久化
        page.putField(FILE_KEY, resultCommodities);
    }

    @Override
    public void process(Page page) {
        if (!"".equals(page.getUrl().regex(URL_REGEX).get())) {
            processCommodity(page);
        }
        List<String> urls = page.getHtml().$("#J_bottomPage").links().regex(URL_REGEX).all();
        page.addTargetRequests(urls);
    }

    @Override
    public Site getSite() {
        return Site.me()
                .setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36")
                .setRetryTimes(spiderConfig.getRetryTimes())
                .setTimeOut(spiderConfig.getTimeOut())
                .setSleepTime(spiderConfig.getSleepTime());
    }
}
