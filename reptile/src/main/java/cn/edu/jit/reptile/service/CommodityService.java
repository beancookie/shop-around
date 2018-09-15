package cn.edu.jit.reptile.service;

import cn.edu.jit.reptile.pojo.DO.CommodityDO;
import cn.edu.jit.reptile.pojo.DTO.CommodityDTO;
import cn.edu.jit.reptile.pojo.DTO.PriceDTO;
import cn.edu.jit.reptile.pojo.DTO.ShopDTO;

import java.util.List;
import java.util.Optional;

/**
 * @author LuZhong
 */
public interface CommodityService {
    /**
     * 根据商品id获取商品价格
     * @param ids
     * @return
     */
    List<PriceDTO> getPricesByIds(List ids);

    /**
     * 根据店铺id获取店铺名称
     * @param shopIds
     * @return
     */
    List<ShopDTO> getShopNamesByIds(List shopIds);

    /**
     * 根据商品id查询商品
     * @param id
     * @return
     */
    Optional<CommodityDO> findCommodityById(String id);

    /**
     * 根据url查询商店
     * @param url
     * @return
     */
    Optional<CommodityDTO> findStoreAndId(String url);
}
