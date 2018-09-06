package cn.edu.jit.reptile.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import us.codecraft.webmagic.scheduler.RedisScheduler;

/**
 * @author LuZhong
 */
@Configuration
public class SchedulerConfig {
    @Value("${spring.redis.host}")
    private String redisHost;
    @Bean
    public RedisScheduler redisScheduler() {
        return new RedisScheduler(redisHost);
    }
}
