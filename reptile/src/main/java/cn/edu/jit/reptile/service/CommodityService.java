package cn.edu.jit.reptile.service;

import cn.edu.jit.reptile.pojo.DTO.PriceDTO;
import cn.edu.jit.reptile.pojo.DTO.ShopDTO;

import java.util.List;

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
}
