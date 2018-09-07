package cn.edu.jit.reptile.pojo.DO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * @author LuZhong
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PriceDO implements Comparable<PriceDO> {
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd HH");
    private Double price;
    private String time;

    @Override
    public int compareTo(PriceDO other) {
        return LocalDateTime.from(FORMATTER.parse(this.time)).isBefore(LocalDateTime.from(FORMATTER.parse(other.time))) ? -1 : 1;
    }
}