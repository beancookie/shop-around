package cn.edu.jit.reptile.processor;

import cn.edu.jit.reptile.pipeline.CommodityPipeline;
import cn.edu.jit.reptile.processor.jd.CommodityPageProcessor;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.scheduler.RedisScheduler;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CommodityPageProcessorTest {
    @Autowired
    private CommodityPageProcessor commodityPageProcessor;

    @Autowired
    private CommodityPipeline commodityPipeline;

    @Autowired
    private RedisScheduler redisScheduler;

    @Test
    public void process() {
        Spider.create(commodityPageProcessor)
                // 手机
                .addUrl("https://list.jd.com/list.html?cat=9987,653,655")
                // 摄影摄像
                .addUrl("https://list.jd.com/list.html?cat=652,654")
                // 耳机/耳麦
                .addUrl("https://list.jd.com/list.html?cat=652,828,842")
                // 路由器
                .addUrl("https://list.jd.com/list.html?cat=670,699,700")
                // 网络盒子
                .addUrl("https://list.jd.com/list.html?cat=670,699,11304")
                // 笔记本
                .addUrl("https://list.jd.com/list.html?cat=670,671,672")
                .addPipeline(commodityPipeline)
                .setScheduler(redisScheduler)
                .thread(10)
                .run();
    }
}