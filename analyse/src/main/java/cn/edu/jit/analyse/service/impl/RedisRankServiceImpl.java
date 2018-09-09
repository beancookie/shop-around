package cn.edu.jit.analyse.service.impl;

import cn.edu.jit.analyse.config.SparkConfig;
import cn.edu.jit.analyse.pojo.DO.DepreciateDO;
import cn.edu.jit.analyse.pojo.DTO.DepreciateDTO;
import cn.edu.jit.analyse.service.RedisRankService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @author LuZhong
 */
@Service
@Slf4j
public class RedisRankServiceImpl implements RedisRankService {
    @Autowired
    private SparkConfig sparkConfig;

    @Autowired
    private RedisTemplate redisTemplate;
    @Autowired
    private StringRedisTemplate stringRedisTemplate;

    @Override
    public void addRankToRedisByDay(Map<String, List<DepreciateDO>> data, int day) {
        data.forEach((category, depreciates) -> {
            // redis中的key
            String key = "rank:" + category + ":" + day;
            TreeSet<DepreciateDO> depreciateSet = new TreeSet<>();
            // 去除redis中的旧排行榜
            depreciateSet.addAll(redisTemplate.opsForZSet().range(key, 0, -1));
            // 将新数据加入排行榜
            depreciateSet.addAll(depreciates);
            AtomicInteger index = new AtomicInteger();
            depreciateSet.forEach(depreciate -> {
                // 只存储指定数量的排行榜数据
                if (index.get() < sparkConfig.getRankNumber()) {
                    redisTemplate.opsForZSet().add(key, depreciate, index.getAndIncrement());
                }
            });
        });
    }

    @Override
    public Optional<List<DepreciateDTO>> getRandFromRedisByCategoryAndDay(String category, int day) {
        // redis模糊查询keys
        StringBuilder pattern = new StringBuilder();
        pattern.append("*rank:");
        if (null != category && !"".equals(category)) {
            pattern.append(category);
        } else {
            pattern.append("*");
        }
        pattern.append(":").append(day);
        Set<String> keys = stringRedisTemplate.keys(pattern.toString());
        List<DepreciateDTO> ranks = new ArrayList<>();
        keys.forEach(key -> {
            // 获取商品类别
            String curCategory = key.substring(key.indexOf(":") + 1, key.lastIndexOf(":"));
            TreeSet<DepreciateDO> depreciateSet = new TreeSet<>();
            // 查询对应类别的商品排行榜
            depreciateSet.addAll(redisTemplate.opsForZSet().range(key.substring(key.indexOf("rank")), 0, -1));
            ranks.add(new DepreciateDTO(curCategory, depreciateSet));
        });
        return Optional.of(ranks);
    }
}
