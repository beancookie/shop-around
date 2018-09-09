package cn.edu.jit.analyse.service.impl;

import cn.edu.jit.analyse.pojo.DO.DepreciateDO;
import cn.edu.jit.analyse.pojo.DTO.DepreciateDTO;
import cn.edu.jit.analyse.service.RedisRankService;
import lombok.extern.slf4j.Slf4j;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.Optional;

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class RedisRankServiceImplTest {
    @Autowired
    private RedisRankService redisRankService;

    @Test
    public void getRandFromRedisByCategoryAndDay() {
        Optional<List<DepreciateDTO>> optional = redisRankService.getRandFromRedisByCategoryAndDay("", 1);
        Assert.assertEquals(true, optional.isPresent());
    }
}