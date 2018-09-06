package cn.edu.jit.reptile.service.impl;

import cn.edu.jit.reptile.pojo.DTO.PriceDTO;
import cn.edu.jit.reptile.pojo.DTO.ShopDTO;
import cn.edu.jit.reptile.service.CommodityService;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContextBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Service;

import javax.net.ssl.SSLContext;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Type;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.util.*;

/**
 * @author LuZhong
 */
@Service
@RefreshScope
@Slf4j
public class CommodityServiceImpl implements CommodityService {
    @Value("${price-url}")
    private String priceUrl;
    @Value("${shop-url}")
    private String shopUrl;

    @Autowired
    private Gson gson;

    private CloseableHttpClient createHttpClient() {
        try {
            SSLContext sslContext = new SSLContextBuilder().loadTrustMaterial(null, (TrustStrategy) (chain, authType) -> true).build();
            SSLConnectionSocketFactory socketFactory = new SSLConnectionSocketFactory(sslContext);
            return HttpClients.custom().setSSLSocketFactory(socketFactory).build();
        } catch (KeyManagementException | NoSuchAlgorithmException | KeyStoreException e) {
            e.printStackTrace();
        }
        return HttpClients.createDefault();
    }

    private <T> LinkedList<T> responseToDTO(String url, Type type) {
        CloseableHttpClient httpClient = createHttpClient();
        HttpGet get = new HttpGet(url);
        CloseableHttpResponse response;
        try {
            response = httpClient.execute(get);
            HttpEntity entity = response.getEntity();
            return gson.fromJson(new InputStreamReader(entity.getContent(), "GBK"), type);
        } catch (IOException e) {
            log.warn("{}", e.getMessage());
        }
        return null;
    }

    @Override
    public List<PriceDTO> getPricesByIds(List ids) {
        StringBuilder url = new StringBuilder();
        // 拼接查询价格sql
        url.append(priceUrl);
        ids.forEach(id -> url.append("J_").append(id).append(","));
        url.replace(url.length() - 1, url.length(), "");
        Optional<List<PriceDTO>> result = Optional.ofNullable(responseToDTO(url.toString(), new TypeToken<LinkedList<PriceDTO>>(){}.getType()));
        return result.orElse(Collections.emptyList());
    }

    @Override
    public List<ShopDTO> getShopNamesByIds(List shopIds) {
        StringBuilder url = new StringBuilder();
        // 拼接查询店铺sql
        url.append(shopUrl);
        shopIds.forEach(id -> url.append(id).append(","));
        url.replace(url.length() - 1, url.length(), "");
        Optional<List<ShopDTO>> result = Optional.ofNullable(responseToDTO(url.toString(), new TypeToken<LinkedList<ShopDTO>>(){}.getType()));
        return result.orElse(Collections.emptyList());
    }
}
