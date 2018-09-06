package cn.edu.jit.reptile.processor;

import cn.edu.jit.reptile.pipeline.MenuPipeline;
import cn.edu.jit.reptile.processor.jd.MenuPageProcessor;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.scheduler.RedisPriorityScheduler;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MenuPageProcessorTest {
    @Autowired
    private MenuPageProcessor menuPageProcessor;

    @Autowired
    private MenuPipeline menuPipeline;

    @Test
    public void process() {
        Spider.create(menuPageProcessor)
                .addUrl("https://www.jd.com/")
                .addPipeline(menuPipeline)
                .setScheduler(new RedisPriorityScheduler("localhost"))
                .thread(3)
                .run();
    }
}