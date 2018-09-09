package cn.edu.jit.analyse.controller;

import cn.edu.jit.analyse.pojo.DO.DepreciateDO;
import cn.edu.jit.analyse.pojo.DTO.DepreciateDTO;
import cn.edu.jit.analyse.service.RedisRankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Optional;

/**
 * @author LuZhong
 */
@RestController
public class RankController {
    @Autowired
    private RedisRankService redisRankService;

    @GetMapping("/rank")
    public ResponseEntity<List<DepreciateDTO>> getRank(@RequestParam(required = false) String category, @RequestParam(required = false, defaultValue = "1") int day) {
        Optional<List<DepreciateDTO>> optional = redisRankService.getRandFromRedisByCategoryAndDay(category, day);
        return optional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
