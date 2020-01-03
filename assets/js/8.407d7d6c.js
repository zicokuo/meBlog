(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{215:function(e,a,o){"use strict";o.r(a);var s=o(1),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"listingitemdetails-问题-ok"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#listingitemdetails-问题-ok"}},[e._v("#")]),e._v(" ListingItemDetails 问题 - ok")]),e._v(" "),o("blockquote",[o("p",[e._v("写入的 ListingSummaryID 与 ListingSummary 表中对应的记录的 ID 不一致;")])]),e._v(" "),o("p",[o("code",[e._v("原因分析")]),e._v("\nMongoDB 集群的配置中有 w，j 和 readPreference 三个选项进行组合配置读/写操作；"),o("br"),e._v("\n当 readPreference 为 secondary 时，采用事务写入的批量数据，在当前 connection 连接中无法马上读取到结果；")]),e._v(" "),o("p",[o("code",[e._v("解决方案")]),e._v("\n暂用 readPreference = 'primary',但是会造成写入延迟；"),o("br"),e._v("\n考虑采用读写分离 connection 进行；")]),e._v(" "),o("p",[o("code",[e._v("参考资料")]),e._v("：")]),e._v(" "),o("p",[e._v("○ https://blog.51cto.com/lizhuquan0769/1763287"),o("br"),e._v("\n○ https://docs.mongodb.com/manual/core/read-isolation-consistency-recency/index.html"),o("br"),e._v("\n○ http://www.mongoing.com/archives/2916")]),e._v(" "),o("h1",{attrs:{id:"mongodb-事务提交-ok"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-事务提交-ok"}},[e._v("#")]),e._v(" MongoDB 事务提交 - ok")]),e._v(" "),o("blockquote",[o("p",[e._v("Nodejs 中使用批量异步提交 MongoDB 操作，首先得开启 session,操作中传递 session 进去,最后 commit session，如果按 500 个数据记录就需要分片事务提交，那么就得预先储存多个 session，并且通过异步并发运行触发方法进行提交。")])]),e._v(" "),o("p",[o("code",[e._v("解决方案")]),e._v("\n通过批量声明 session 并暂存到数组,然后使用并发 async.parallel 进行提交;")]),e._v(" "),o("h1",{attrs:{id:"mongodb-join-表-ok"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-join-表-ok"}},[e._v("#")]),e._v(" MongoDB Join 表 - ok")]),e._v(" "),o("p",[e._v("MongoDB Join 表是通过 aggregate 中$lookup 方法进行 join 操作，join 后的记录集合会写入到 as 配置的字段中，此时数据集中存在嵌套文档的字段,实体相当于 leftJoin 的一棵树；\n"),o("code",[e._v("1")]),e._v(" lookup 之后，采用 unwind 获得相当于 union right 的集合,然后采用 addFields 把需要的字段添加到结果中；\n"),o("code",[e._v("2")]),e._v(" lookup 之后,直接采用 addFields 把需要的字段添加到结果集中,相当于 union 操作；\n"),o("code",[e._v("解决方案")]),e._v("\nCore/unit/mongodb.js 底层封装中,提供转换方法,最终转换为 pipeline json 格式内容")]),e._v(" "),o("h1",{attrs:{id:"图片对比功能"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#图片对比功能"}},[e._v("#")]),e._v(" 图片对比功能")]),e._v(" "),o("blockquote",[o("p",[e._v("由于 eBayMonitor v2.0 版本中对 listing 图片对比相关功能已进行去掉处理,需要跟 Alex 进行沟通并恢复该部分的功能;")])]),e._v(" "),o("pre",[o("code",[e._v("• compare_picture\n• getPictureUpdateDate\n")])]),e._v(" "),o("h1",{attrs:{id:"salesenquiry-分析功能"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#salesenquiry-分析功能"}},[e._v("#")]),e._v(" SalesEnquiry 分析功能")]),e._v(" "),o("p",[o("code",[e._v("1")]),e._v(" 通过 SP_updateNonVariationSalesEnquiry 分析 ListingItemDetails 中的数据,得出临时数据集合#analyseData\n"),o("code",[e._v("2")]),e._v(" 对#analyseData 进行统计计算,产生临时数据集合#calculateData\n"),o("code",[e._v("3")]),e._v(" 把#calculateData 计算结果写入到实体表 NonVariationSalesEnquiry\n"),o("code",[e._v("4")]),e._v(" 通过 SP_UpdateSalesEnquiry 中,对 NonVariationSalesEnquiry 数据进行拼装,产生 SalesEnquiry 数据,最终写入到实体表 SalesEnquiry")]),e._v(" "),o("h1",{attrs:{id:"salesdeals-功能"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#salesdeals-功能"}},[e._v("#")]),e._v(" SalesDeals 功能")]),e._v(" "),o("p",[e._v("SalesDeals 是通过 python 爬虫进行交易页面数据获取并写入到 eBayDeals 实体表")]),e._v(" "),o("h1",{attrs:{id:"api-docs-实现方案"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#api-docs-实现方案"}},[e._v("#")]),e._v(" API Docs 实现方案")]),e._v(" "),o("blockquote",[o("p",[e._v("SwaggerAPIDocs 分 2 部分,swagger 服务部署和文档生成")])]),e._v(" "),o("blockquote",[o("p",[e._v("Js es6 生态下,swagger 暂时没有一款与 DjangoRESTframework 那么完整的 api 解决方案,包括没有自动根据已有接口生成 api 文档的功能;")])]),e._v(" "),o("p",[o("code",[e._v("方案1")]),e._v("通过 swagger-js-codegen / swaggerClient 进行接口文件生成")]),e._v(" "),o("p",[o("code",[e._v("方案2")]),e._v("通过 function 注释添加相关的 swagger 语法内容,然后通过 swagger-jsdoc 进行捕获")]),e._v(" "),o("p",[o("code",[e._v("方案3")]),e._v("人工维护一份 api 接口 json 配置表,直接采用 koa-swagger2 部署 swagger 服务并加载该文件用于接口文档展示\n"),o("code",[e._v("方案4")]),e._v("项目混合 typescript,采用 koa-swagger-decorator,为接口额外声明 schema 对象,用于描述接口内容\n"),o("code",[e._v("方案5")]),e._v("放弃 swagger,采用 graphql 进行 api 接口声明与开发")]),e._v(" "),o("h1",{attrs:{id:"koa-swagger-实现方案"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#koa-swagger-实现方案"}},[e._v("#")]),e._v(" Koa Swagger 实现方案")]),e._v(" "),o("blockquote",[o("p",[e._v("Koa 暂时没有很好的 Swagger 整套解决方案,只能采用套件拼凑的方法实现:")])]),e._v(" "),o("p",[o("code",[e._v("Swapi + Joi Schema + KoaRouter")])]),e._v(" "),o("blockquote",[o("p",[e._v("采用 Github 上一个开源 swapi 的项目,通过 Joi 语义化库配置出接口 Schema,供 swagger 进行参数解析与结果回调,swapi 的加入需要根据 Joi 语义化结构的 Schema 针对现有框架的 KoaRouter 进行 Schema 的实现的修改,实现一个 schema 通用 KoaRouter 核 Swapi")])]),e._v(" "),o("p",[o("code",[e._v("参考资料")]),e._v(":")]),e._v(" "),o("p",[o("code",[e._v("https://github.com/haowen737/koa-swapi")])]),e._v(" "),o("h1",{attrs:{id:"koa-router-prefix-冲突问题"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#koa-router-prefix-冲突问题"}},[e._v("#")]),e._v(" Koa Router prefix 冲突问题")]),e._v(" "),o("blockquote",[o("p",[e._v("当 KoaRouter 存在多个实例,可以通过 prefix 设置路由前缀达到路由分组;")])]),e._v(" "),o("p",[o("code",[e._v("问题")])]),e._v(" "),o("p",[e._v("如果存在 2 个相同 prefix 的 router,则按照 use 顺序进行注册,后者将会获得匹配 prefix 解析的优先级,那么前面注册的 router 就会失效")])])}),[],!1,null,null,null);a.default=t.exports}}]);