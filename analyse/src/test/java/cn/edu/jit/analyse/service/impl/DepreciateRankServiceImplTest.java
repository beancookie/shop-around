package cn.edu.jit.analyse.service.impl;

import cn.edu.jit.analyse.service.DepreciateRankService;
import lombok.ToString;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DepreciateRankServiceImplTest {
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    @Autowired
    private DepreciateRankService depreciateRankService;
    @Test
    public void dayRank() {
        depreciateRankService.dayRank(LocalDate.from(FORMATTER.parse("2018-09-09")));
    }
}