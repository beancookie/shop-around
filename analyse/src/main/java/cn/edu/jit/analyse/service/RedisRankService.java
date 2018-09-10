package cn.edu.jit.analyse.service;

import cn.edu.jit.analyse.pojo.DO.DepreciateDO;
import cn.edu.jit.analyse.pojo.DTO.DepreciateDTO;

import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * @author LuZhong
 */
public interface RedisRankService {
    /**
     * 将降价排行榜存到redis的有序集合中，其中key为 商品类别:间隔时间
     *
     * @param data
     * @param day  间隔时间
     */
    void addRankToRedisByDay(Map<String, List<DepreciateDO>> data, int day);

    /**
     * 根据类别名称和天数查询redis中的排行榜
     *
     * @param category
     * @param day
     * @return
     */
    Optional<List<DepreciateDTO>> getRandFromRedisByCategoryAndDay(String category, int day);
}
