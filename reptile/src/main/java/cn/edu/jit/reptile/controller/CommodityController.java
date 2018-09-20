package cn.edu.jit.reptile.controller;

import cn.edu.jit.reptile.pojo.DO.CommodityDO;
import cn.edu.jit.reptile.pojo.DTO.CommodityDTO;
import cn.edu.jit.reptile.service.CommodityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

/**
 * @author LuZhong
 */
@RestController
@RequestMapping("/commodity")
public class CommodityController {
    @Autowired
    private CommodityService commodityService;

    @GetMapping("/id")
    public ResponseEntity<CommodityDO> getCommodityById(@RequestParam String id) {
        Optional<CommodityDO> optional = commodityService.findCommodityById(id);
        return optional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/url")
    public ResponseEntity<CommodityDO> getCommodityByUrl(@RequestParam String url) {
        Optional<CommodityDTO> optionalDTO = commodityService.findStoreAndId(url);
        if (optionalDTO.isPresent()) {
            Optional<CommodityDO> optionalDO = commodityService.findCommodityById(optionalDTO.get().getId());
            return optionalDO.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
