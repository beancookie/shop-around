package cn.edu.jit.reptile.repository;

import cn.edu.jit.reptile.pojo.DO.MenuDO;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author LuZhong
 */
@Repository
public interface MenuRepository extends CrudRepository<MenuDO, String> {
}
