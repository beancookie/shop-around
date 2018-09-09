package cn.edu.jit.analyse.pojo.DTO;

import cn.edu.jit.analyse.pojo.DO.DepreciateDO;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Set;

/**
 * @author LuZhong
 */
@Data
@AllArgsConstructor
public class DepreciateDTO {
    private String category;
    private Set<DepreciateDO> depreciateDOList;
}
