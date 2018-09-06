package cn.edu.jit.reptile.pipeline;

import cn.edu.jit.reptile.pojo.DO.CommodityDO;
import cn.edu.jit.reptile.pojo.DO.MenuDO;
import cn.edu.jit.reptile.processor.jd.CommodityPageProcessor;
import cn.edu.jit.reptile.repository.CommodityRepository;
import cn.edu.jit.reptile.repository.MenuRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import us.codecraft.webmagic.ResultItems;
import us.codecraft.webmagic.Task;
import us.codecraft.webmagic.pipeline.Pipeline;

import java.util.List;
import java.util.Optional;

/**
 * @author LuZhong
 */
@Component
@Slf4j
public class CommodityPipeline implements Pipeline {
    @Autowired
    private CommodityRepository commodityRepository;

    @Override
    public void process(ResultItems resultItems, Task task) {
        List<CommodityDO> commodities = resultItems.get(CommodityPageProcessor.FILE_KEY);
        commodities.forEach(commodity -> {
            Optional<CommodityDO> optional = commodityRepository.findById(commodity.getId());
            // 更新价格
            if (optional.isPresent()) {
                CommodityDO commodityDO = optional.get();
                commodityDO.getPrices().addAll(commodity.getPrices());
                commodityRepository.save(commodityDO);
            // 添加新商品
            } else {
                commodityRepository.save(commodity);
            }
        });
    }
}
