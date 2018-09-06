package cn.edu.jit.reptile.repository;

import cn.edu.jit.reptile.pojo.DO.CommodityDO;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author LuZhong
 */
@Repository
public interface CommodityRepository extends CrudRepository<CommodityDO, String> {
}
