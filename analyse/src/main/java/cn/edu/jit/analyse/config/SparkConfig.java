package cn.edu.jit.analyse.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.context.annotation.Configuration;

import java.util.List;
/**
 * @author LuZhong
 */
@ConfigurationProperties("spark")
@Configuration
@RefreshScope
@Getter
@Setter
public class SparkConfig {
    private String hadoopHomeDir;
    private String sparkDriverHost;
    private String sparkMongodbInputUri;
    private String sparkMongodbOutputUri;
    private Integer rankNumber;
    private List<Integer> rankDays;
}
