package cn.edu.jit.reptile.config;

import com.google.gson.Gson;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author LuZhong
 */
@Configuration
public class HttpConfig {
    @Bean
    public Gson gson() {
        return new Gson();
    }
}
