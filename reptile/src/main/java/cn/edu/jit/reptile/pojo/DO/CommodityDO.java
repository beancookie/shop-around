package cn.edu.jit.reptile.pojo.DO;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Set;
import java.util.TreeSet;

/**
 * @author LuZhong
 */
@Data
@Document(collection = "jd_commodity")
public class CommodityDO {
    /**
     * 商品id
     */
    @Id
    private String _id;
    /**
     * 商品名称
     */
    private String name;
    /**
     * 商品链接
     */
    private String url;
    /**
     * 图片链接
     */
    private String imgUrl;
    /**
     * 商品类别
     */
    private String category;
    /**
     * 不同时间的价格
     */
    private Set<PriceDO> prices = new TreeSet<>();
    /**
     * 店铺id
     */
    private String shopId;
    /**
     * 店铺名称
     */
    private String shopName;

    public void addPrice(PriceDO price) {
        this.prices.add(price);
    }
}
