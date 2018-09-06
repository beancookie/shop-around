package cn.edu.jit.reptile.pojo.DO;

import java.util.List;
import lombok.Data;

/**
 * @author LuZhong
 */
@Data
public class MenuDO {
    private String url;
    private String name;
    private List<MenuDO> children;
}
