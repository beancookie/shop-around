package cn.edu.jit.reptile.service;

import cn.edu.jit.reptile.pojo.DO.CommodityDO;
import cn.edu.jit.reptile.pojo.DTO.PriceDTO;
import cn.edu.jit.reptile.pojo.DTO.ShopDTO;

import java.util.List;
import java.util.Optional;

/**
 * @author LuZhong
 */
public interface CommodityService {
    /**
     *
     * @param ids
     * @return
     */
    List<PriceDTO> getPricesByIds(List ids);

    /**
     *
     * @param shopIds
     * @return
     */
    List<ShopDTO> getShopNamesByIds(List shopIds);

    Optional<CommodityDO> findCommodityById(String id);
}
