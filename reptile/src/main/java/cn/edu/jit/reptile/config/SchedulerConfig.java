package cn.edu.jit.reptile.config;

import cn.edu.jit.reptile.client.AnalyseClient;
import cn.edu.jit.reptile.scheduler.InformedRedisScheduler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import us.codecraft.webmagic.scheduler.RedisScheduler;

/**
 * @author LuZhong
 */
@Configuration
public class SchedulerConfig {
    @Autowired
    private AnalyseClient analyseClient;

    @Value("${spring.redis.host}")
    private String redisHost;
    @Bean
    public RedisScheduler redisScheduler() {
        InformedRedisScheduler redisScheduler = new InformedRedisScheduler(redisHost);
        redisScheduler.setAnalyseClient(analyseClient);
        return redisScheduler;
    }
}
