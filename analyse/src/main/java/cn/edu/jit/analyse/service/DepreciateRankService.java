package cn.edu.jit.analyse.service;

import java.time.LocalDate;

/**
 * @author LuZhong
 */
public interface DepreciateRankService {
    /**
     * 利用spark分析指定日期的降价额度排行榜
     * @param date
     */
    void dayRank(LocalDate date);
}
