package cn.edu.jit.reptile.pojo.DO;

import cn.edu.jit.reptile.config.Contents;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

/**
 * @author LuZhong
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PriceDO implements Comparable<PriceDO> {
    private Double price;
    private String date;

    @Override
    public int compareTo(PriceDO other) {
        return LocalDate.from(Contents.FORMATTER.parse(this.date)).isBefore(LocalDate.from(Contents.FORMATTER.parse(other.date))) ? -1 : 1;
    }
}