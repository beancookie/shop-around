package cn.edu.jit.reptile.pipeline;

import cn.edu.jit.reptile.pojo.DO.MenuDO;
import cn.edu.jit.reptile.processor.jd.MenuPageProcessor;
import cn.edu.jit.reptile.repository.MenuRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import us.codecraft.webmagic.ResultItems;
import us.codecraft.webmagic.Task;
import us.codecraft.webmagic.pipeline.Pipeline;
import java.util.List;

/**
 * @author LuZhong
 */
@Component
@Slf4j
public class MenuPipeline implements Pipeline {
    @Autowired
    private MenuRepository menuRepository;

    @Override
    public void process(ResultItems resultItems, Task task) {
        List<MenuDO> menus = resultItems.get(MenuPageProcessor.FILE_KEY);
        menuRepository.saveAll(menus);
    }
}
