package cn.edu.jit.analyse.converter;

import cn.edu.jit.reptile.config.Contents;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
 * @author LuZhong
 */
@Component
public class LocalDateTimeConverter implements Converter<String, LocalDateTime> {
    @Override
    public LocalDateTime convert(String time) {
        return LocalDateTime.from(Contents.FORMATTER.parse(time));
    }
}
