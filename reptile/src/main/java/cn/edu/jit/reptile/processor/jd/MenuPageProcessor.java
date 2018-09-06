package cn.edu.jit.reptile.processor.jd;

import cn.edu.jit.reptile.pojo.DO.MenuDO;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Element;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Component;
import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.processor.PageProcessor;
import us.codecraft.webmagic.selector.Html;
import us.codecraft.webmagic.selector.Selectable;

import java.util.ArrayList;
import java.util.List;

/**
 * @author LuZhong
 */
@Component
@Slf4j
@RefreshScope
public class MenuPageProcessor implements PageProcessor {
    public static final String FILE_KEY = "menus";
    private static final String PROTOCOL = "https:";
    @Value("${spider.retry-times}")
    private Integer retryTimes;
    @Value("${spider.time-out}")
    private Integer timeOut;
    @Value("${spider.sleep-time}")
    private Integer sleepTime;
    @Override
    public void process(Page page) {
        List<MenuDO> resultMenus = new ArrayList<>();
        Html html = page.getHtml();
        List<Selectable> menus = html.$(".cate_menu_lk").nodes();

        menus.forEach(menu -> {
            MenuDO menuDO = new MenuDO();
            String name = menu.xpath("//a/text()").get();
            String url = PROTOCOL + menu.xpath("//a/@href").get();
            menuDO.setName(name);
            menuDO.setUrl(url);
            resultMenus.add(menuDO);
        });
        page.putField(FILE_KEY, resultMenus);
    }

    @Override
    public Site getSite() {
        return Site.me()
                .setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36")
                .setRetryTimes(retryTimes)
                .setTimeOut(timeOut)
                .setSleepTime(sleepTime);
    }
}

