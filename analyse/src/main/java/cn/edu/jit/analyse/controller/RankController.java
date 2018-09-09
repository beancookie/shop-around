package cn.edu.jit.analyse.controller;

import cn.edu.jit.analyse.pojo.DO.DepreciateDO;
import cn.edu.jit.analyse.pojo.DTO.DepreciateDTO;
import cn.edu.jit.analyse.service.DepreciateRankService;
import cn.edu.jit.analyse.service.RedisRankService;
import cn.edu.jit.reptile.config.Contents;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomBooleanEditor;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.beans.propertyeditors.LocaleEditor;
import org.springframework.beans.propertyeditors.PropertiesEditor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import java.beans.PropertyEditor;
import java.beans.PropertyEditorSupport;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * @author LuZhong
 */
@RestController
public class RankController {
    @Autowired
    private RedisRankService redisRankService;

    @Autowired
    private DepreciateRankService depreciateRankService;

    @GetMapping("/rank")
    public ResponseEntity<List<DepreciateDTO>> getRank(@RequestParam(required = false) String category, @RequestParam(required = false, defaultValue = "1") int day) {
        Optional<List<DepreciateDTO>> optional = redisRankService.getRandFromRedisByCategoryAndDay(category, day);
        return optional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/rank")
    public ResponseEntity addRank(@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date) {
        depreciateRankService.dayRank(date);
        return ResponseEntity.ok().build();
    }
}
