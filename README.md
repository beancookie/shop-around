# shop-around
## 简介
使用SpringCloud，通过Webmagic爬去获取京东商品信息，将原始数据存放在MongoDB中然后通过Spark对数据进行分析获取降价排行榜。最后通过小程序发布。

## 运行截图

- 不同类别的降价排行榜

![https://github.com/loveluzhong/shop-around/blob/master/images/%E5%9B%BE%E7%89%871.png?raw=true](https://github.com/loveluzhong/shop-around/blob/master/images/%E5%9B%BE%E7%89%871.png?raw=true)

![https://github.com/loveluzhong/shop-around/blob/master/images/%E5%9B%BE%E7%89%872.png?raw=true](https://github.com/loveluzhong/shop-around/blob/master/images/%E5%9B%BE%E7%89%872.png?raw=true)

- 通过商品url搜索价格曲线

![https://github.com/loveluzhong/shop-around/blob/master/images/%E5%9B%BE%E7%89%873.png?raw=true](https://github.com/loveluzhong/shop-around/blob/master/images/%E5%9B%BE%E7%89%873.png?raw=true)

![https://github.com/loveluzhong/shop-around/blob/master/images/%E5%9B%BE%E7%89%874.jpg?raw=true](https://github.com/loveluzhong/shop-around/blob/master/images/%E5%9B%BE%E7%89%874.jpg?raw=true)

## 项目结构

`├── analyse	// 大数据分析模块：使用Spark读取MongoDB中的商品信息然后通过Spark SQL进行计算将降价信息保存到Redis中。
├── config		// 配置中心
├── docker	// 
├── eureka	// 注册中心
├── images	// 
├── pom.xml	//
├── reptile		// 通过Webmagic框架爬取京东、天猫、苏宁易购的商品信息保存到MongoDB中。
├── wxmp		// 使用Wepy框架开发微信小程序，将该系统需要实现的功能通过微信小程序展示出来和用户进行交互，主要包括： 展示商品信息，降价排行榜，历史价格等等。
└── zuul		// 微服务外部网关`

