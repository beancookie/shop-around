package cn.edu.jit.reptile.service.impl;

import cn.edu.jit.reptile.pojo.DTO.PriceDTO;
import cn.edu.jit.reptile.pojo.DTO.ShopDTO;
import cn.edu.jit.reptile.service.CommodityService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.LinkedList;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PriceServiceImplTest {
    @Autowired
    private CommodityService priceService;

    private LinkedList<String> ids;
    private LinkedList<String> shopIds;

    @Before
    public void before() {
        ids = new LinkedList<>();
        ids.add("7788458");
        ids.add("7810832");
        shopIds = new LinkedList<>();
        shopIds.add("1000004123");
    }

    @Test
    public void getPricesByIds() {
        List<PriceDTO> prices = priceService.getPricesByIds(ids);
        assertEquals(2, prices.size());
    }

    @Test
    public void getShopNamesByIds() {
        List<ShopDTO> shops = priceService.getShopNamesByIds(shopIds);
        assertEquals(1, shops.size());
    }
}