package cn.edu.jit.reptile.scheduled;

import cn.edu.jit.reptile.config.SpiderConfig;
import cn.edu.jit.reptile.pipeline.CommodityPipeline;
import cn.edu.jit.reptile.processor.jd.CommodityPageProcessor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.scheduler.RedisScheduler;

/**
 * @author LuZhong
 */
@Component
@Slf4j
public class JdReptileScheduled {
    @Autowired
    private SpiderConfig spiderConfig;

    @Autowired
    private CommodityPageProcessor commodityPageProcessor;

    @Autowired
    private CommodityPipeline commodityPipeline;

    @Autowired
    private RedisScheduler redisScheduler;

    private class Task implements us.codecraft.webmagic.Task {
        private String uuid;

        Task(String uuid) {
            this.uuid = uuid;
        }

        @Override
        public String getUUID() {
            return uuid;
        }

        @Override
        public Site getSite() {
            throw new UnsupportedOperationException();
        }
    }

    @Scheduled(cron = "0 0 2 * * ?")
    public void process() {
        Spider spider = Spider.create(commodityPageProcessor);
        spiderConfig.getStartUrls().forEach(spider::addUrl);
        spider.addPipeline(commodityPipeline)
                .setScheduler(redisScheduler)
                .thread(spiderConfig.getThread());
        final String uuid = spider.getUUID();
        redisScheduler.resetDuplicateCheck(new Task(uuid));
        spider.run();
    }
}