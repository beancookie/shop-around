package cn.edu.jit.analyse.service;

import java.time.LocalDateTime;

/**
 * @author LuZhong
 */
public interface DepreciateRankService {
    /**
     * 利用spark分析指定日期的降价额度排行榜
     * @param time
     */
    void dayRank(LocalDateTime time);
}
