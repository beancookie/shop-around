package cn.edu.jit.reptile.pojo.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommodityDTO {
    public enum Store {
        JD,
        TM,
        SN
    }
    private Store store;
    private String id;
}
