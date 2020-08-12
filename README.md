## SDK说明

  提供OneNET Studio-公开API接口-node版本SDK,通过调用公开接口方法,快速获取公开接口内容。
 
## 使用说明
### 一：注意事项
  注意事项，需要您本地配置用户相关信息，例如：
```js

let oneNetSDK = require('onenetstudio-api-sdk')//申明方式用let,因为后面需要实例化一次
const config = {
    author_key: accessKey,//自己账号的key
    user_id: userId,
    version: '2020-05-29',
    url: ''//可自定义url,不需要配置的时候，删除url这个字段即可，默认：https://openapi.heclouds.com
}
// 常量config可以全局配置也可以在当前引入，然后进行一次实例化
oneNetSDK = new oneNetSDK(config)//实例化之后便可以调用oneNetSDK

示例：项目下的产品列表使用如下：

    const params = {
      query:{
        project_id: "KLza8R"
      },
      body:{}
    }
 const data = await oneNetSDK.APPQueryProductList(params)
```

说明：提前配置好相关的用户信息，也可以全局配置，author_key、user_id、version必不可少，具体的案例如上，
### 二：步骤
  1.通过npm i onenetstudio-api-node-sdk获取插件包
  2.通过require的方式引用，并且配置好相关的用户信息
  3.传参要求为一个对象，对象里面必须包含query和body两个对象，不管里面是否有值都要传
  4.通过固定的公开接口方法名来进行调用传参，具体方法和说明如下
  5.返回的data即为返回的数据

## 方法集合
 * 设备管理类
 * 接口名称-----接口名称,命名规则：路径简写+方法名
 * 设备创建(单个)-----COMCreateDevice
 * 设备创建(批量)-----COMBatchCreateDevices
 * 设备编辑-----COMUpdateDevice
 * 设备删除-----COMDeleteDevice
 * 设备详情-----COMQueryDeviceDetail
 * 应用开发类
 * 项目概况----APPQueryStatistics
 * 项目集成产品列表-----APPQueryProductList
 * 项目集成设备列表-----APPQueryDeviceList
 * 项目添加设备-----APPAddDevice
 * 项目设备移除-----APPRemoveDevice
 * 设备详情-----APPQueryDeviceDetail
 * 设备状态查询-----APPQueryDeviceStatus
 * 设备状态历史数据查询-----APPQueryDeviceStatusHistory
 * 设备属性设置-----APPSetDeviceProperty
 * 设备属性期望设置-----APPSetDeviceDesiredProperty
 * 设备属性期望查询-----APPQueryDeviceDesiredProperty
 * 设备属性期望删除-----APPDeleteDeviceDesiredProperty
 * 设备操作日志查询-----APPQueryDeviceLog
 * 设备属性最新数据查询-----APPQueryDeviceProperty
 * 设备属性历史数据查询-----APPQueryDevicePropertyHistory
 * 设备事件历史数据查询-----APPQueryDeviceEventHistory
 * 场景联动规则创建-----APPCreateSceneRule
 * 场景联动规则编辑-----APPUpdateSceneRule
 * 场景联动规则详情-----APPQuerySceneRuleDetail
 * 场景联动规则列表-----APPQuerySceneRules
 * 场景联动触发日志-----APPQuerySceneLog
 */