package cn.edu.jit.reptile.scheduled;

import cn.edu.jit.reptile.config.StartUrlsConfig;
import cn.edu.jit.reptile.pipeline.CommodityPipeline;
import cn.edu.jit.reptile.processor.jd.CommodityPageProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.scheduler.RedisScheduler;

/**
 * @author LuZhong
 */
@Component
public class JdReptileScheduled {
    @Value("${spider.thread}")
    private Integer thread;

    @Autowired
    private StartUrlsConfig startUrlsConfig;

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
        startUrlsConfig.getStartUrls().forEach(spider::addUrl);
        spider.addPipeline(commodityPipeline)
                .setScheduler(redisScheduler)
                .thread(thread);
        final String uuid = spider.getUUID();
        redisScheduler.resetDuplicateCheck(new Task(uuid));
        spider.run();
    }
}
