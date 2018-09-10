package cn.edu.jit.reptile.scheduler;

import cn.edu.jit.reptile.client.AnalyseClient;
import cn.edu.jit.reptile.config.Contents;
import us.codecraft.webmagic.Request;
import us.codecraft.webmagic.Task;
import us.codecraft.webmagic.scheduler.RedisScheduler;

import java.time.LocalDate;

/**
 * @author LuZhong
 */
public class InformedRedisScheduler extends RedisScheduler {
    private AnalyseClient analyseClient;

    public InformedRedisScheduler(String host) {
        super(host);
    }

    @Override
    public synchronized Request poll(Task task) {
        Request request = super.poll(task);
        if (request == null) {
            // 通知Spark开始分析数据啦
            analyseClient.addRank(Contents.FORMATTER.format(LocalDate.now()));
        }
        return request;
    }

    public void setAnalyseClient(AnalyseClient analyseClient) {
        this.analyseClient = analyseClient;
    }
}
