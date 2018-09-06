package cn.edu.jit.reptile;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * @author LuZhong
 */

@EnableDiscoveryClient
@SpringBootApplication
public class ReptileApplication {
    public static void main(String[] args) {
        SpringApplication.run(ReptileApplication.class, args);
    }
}
