package cn.edu.jit.reptile.client;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @author LuZhong
 */
@FeignClient("analyse")
public interface AnalyseClient {
    /**
     *
     * @param date
     * @returnsp
     */
    @PostMapping("/rank")
    ResponseEntity addRank(@RequestParam("date") String date);
}
