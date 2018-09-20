package cn.edu.jit.reptile;

import cn.edu.jit.reptile.config.SpiderConfig;
import cn.edu.jit.reptile.pipeline.CommodityPipeline;
import cn.edu.jit.reptile.processor.jd.CommodityPageProcessor;
import cn.edu.jit.reptile.scheduled.JdReptileScheduled;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.scheduler.RedisScheduler;

/**
 * @author LuZhong
 */

@EnableFeignClients
@EnableDiscoveryClient
@EnableScheduling
@SpringBootApplication
public class ReptileApplication {
    @Autowired
    private RedisScheduler redisScheduler;
    public static void main(String[] args) {
        SpringApplication.run(ReptileApplication.class, args);
    }
}
