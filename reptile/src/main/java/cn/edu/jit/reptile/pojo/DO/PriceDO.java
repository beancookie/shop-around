package cn.edu.jit.reptile.pojo.DO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * @author LuZhong
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PriceDO implements Comparable<PriceDO> {
    private Double price;
    private LocalDateTime time;

    @Override
    public int compareTo(PriceDO other) {
        return this.time.isBefore(other.time) ? -1 : 1;
    }
}