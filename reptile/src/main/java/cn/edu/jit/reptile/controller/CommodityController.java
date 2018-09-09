package cn.edu.jit.analyse.controller;

import cn.edu.jit.reptile.pojo.DO.CommodityDO;
import cn.edu.jit.reptile.service.CommodityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

/**
 * @author LuZhong
 */
@RestController
public class CommodityController {
    @Autowired
    private CommodityService commodityService;

    @GetMapping("/commodity")
    public ResponseEntity<CommodityDO> getCommodityById(@RequestParam String id) {
        Optional<CommodityDO> optional = commodityService.findCommodityById(id);
        return optional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
