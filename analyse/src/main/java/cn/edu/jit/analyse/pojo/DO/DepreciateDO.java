package cn.edu.jit.analyse.pojo.DO;

import lombok.*;

import java.io.Serializable;

/**
 * @author LuZhong
 */
@Data
public class DepreciateDO implements Comparable<DepreciateDO>, Serializable {
    private static final long serialVersionUID = 5668928488453089973L;
    private String _id;
    private String name;
    private String url;
    private String imgUrl;
    private String shopName;
    private String category;
    private Double depreciate;

    @Override
    public int compareTo(DepreciateDO other) {
        if (depreciate.equals(other.depreciate)) {
            return 0;
        } else {
            return depreciate > other.depreciate ? -1 : 1;
        }
    }
}
