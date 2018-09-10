package cn.edu.jit.reptile.client;

import cn.edu.jit.reptile.config.Contents;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AnalyseClientTest {
    @Autowired
    private AnalyseClient analyseClient;

    @Test
    public void addRank() {
        analyseClient.addRank(Contents.FORMATTER.format(LocalDate.now()));
    }
}