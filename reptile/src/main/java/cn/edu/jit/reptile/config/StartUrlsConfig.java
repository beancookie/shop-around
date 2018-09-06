package cn.edu.jit.reptile.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.List;

/**
 * @author LuZhong
 */
@Configuration
@ConfigurationProperties("spider")
@Getter
@Setter
public class StartUrlsConfig {
    private List<String> startUrls;
}


