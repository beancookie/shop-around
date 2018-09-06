package cn.edu.jit.reptile.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.context.annotation.Configuration;

import java.util.List;

/**
 * @author LuZhong
 */
@Configuration
@ConfigurationProperties("spider")
@RefreshScope
@Getter
@Setter
public class SpiderConfig {
    private List<String> startUrls;
    private Integer thread;
    private Integer retryTimes;
    private Integer timeOut;
    private Integer sleepTime;
}


