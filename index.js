const _arrange = require('./src/arrange')
const _key = require('./src/key.js')
/**
 * @方法集合
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
class API {
  constructor(config) {
    // 判断用户是否配置了url
    if(config.url){
      this.url = config.url
    }
    // 计算token
    const token = _key.createCommonToken(config)
    this.token = token
  }
//API集合
  // 设备管理类
  async COMCreateDevice(params){
    params.query.action = 'CreateDevice'
    params.path = 'common'
    params.authorization = this.token
    params.url = this.url
    params.method = 'post'
    return await _arrange.validation(params)
  }
  async COMBatchCreateDevices(params){
    params.query.action = 'BatchCreateDevices'
    params.path = 'common'
    params.authorization = this.token
    params.url = this.url
    params.method = 'post'
    return await _arrange.validation(params)
  }
  async COMUpdateDevice(params){
    params.query.action = 'UpdateDevice'
    params.path = 'common'
    params.authorization = this.token
    params.url = this.url
    params.method = 'post'
    return await _arrange.validation(params)
  }
  async COMDeleteDevice(params){
    params.query.action = 'DeleteDevice'
    params.path = 'common'
    params.authorization = this.token
    params.url = this.url
    params.method = 'post'
    return await _arrange.validation(params)
  }
  async COMQueryDeviceDetail(params){
    params.query.action = 'QueryDeviceDetail'
    params.path = 'common'
    params.authorization = this.token
    params.url = this.url
    params.method = 'get'
    return await _arrange.validation(params)
  }
  // 应用开发类
  async APPQueryStatistics(params){
    params.query.action = 'QueryStatistics'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'get'
    return await _arrange.validation(params)
  }
  async APPQueryProductList(params){
    params.query.action = 'QueryProductList'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'get'
    return await _arrange.validation(params) 
  }
  async APPQueryDeviceList(params){
    params.query.action = 'QueryDeviceList'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'get'
    return await _arrange.validation(params) 
  }
  async APPAddDevice(params){
    params.query.action = 'AddDevice'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'post'
    return await _arrange.validation(params) 
  }
  async APPRemoveDevice(params){
    params.query.action = 'RemoveDevice'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'post'
    return await _arrange.validation(params) 
  }
  async APPQueryDeviceDetail(params){
    params.query.action = 'QueryDeviceDetail'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'get'
    return await _arrange.validation(params) 
  }
  async APPQueryDeviceStatus(params){
    params.query.action = 'QueryDeviceStatus'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'get'
    return await _arrange.validation(params) 
  }
  async APPQueryDeviceStatusHistory(params){
    params.query.action = 'QueryDeviceStatusHistory'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'get'
    return await _arrange.validation(params) 
  }
  async APPSetDeviceProperty(params){
    params.query.action = 'SetDeviceProperty'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'post'
    return await _arrange.validation(params) 
  }
  async APPSetDeviceDesiredProperty(params){
    params.query.action = 'SetDeviceDesiredProperty'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'post'
    return await _arrange.validation(params) 
  }
  async APPQueryDeviceDesiredProperty(params){
    params.query.action = 'QueryDeviceDesiredProperty'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'post'
    return await _arrange.validation(params) 
  }
  async APPDeleteDeviceDesiredProperty(params){
    params.query.action = 'DeleteDeviceDesiredProperty'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'post'
    return await _arrange.validation(params) 
  }
  async APPQueryDeviceLog(params){
    params.query.action = 'QueryDeviceLog'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'get'
    return await _arrange.validation(params) 
  }
  async APPQueryDeviceProperty(params){
    params.query.action = 'QueryDeviceProperty'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'get'
    return await _arrange.validation(params) 
  }
  async APPQueryDevicePropertyHistory(params){
    params.query.action = 'QueryDevicePropertyHistory'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'get'
    return await _arrange.validation(params) 
  }
  async APPQueryDeviceEventHistory(params){
    params.query.action = 'QueryDeviceEventHistory'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'get'
    return await _arrange.validation(params) 
  }
  async APPCreateSceneRule(params){
    params.query.action = 'CreateSceneRule'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'post'
    return await _arrange.validation(params) 
  }
  async APPUpdateSceneRule(params){
    params.query.action = 'UpdateSceneRule'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'post'
    return await _arrange.validation(params) 
  }
  async APPQuerySceneRuleDetail(params){
    params.query.action = 'QuerySceneRuleDetail'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'get'
    return await _arrange.validation(params) 
  }
  async APPQuerySceneRules(params){
    params.query.action = 'QuerySceneRules'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'get'
    return await _arrange.validation(params) 
  }
  async APPQuerySceneLog(params){
    params.query.action = 'QuerySceneLog'
    params.path = 'application'
    params.authorization = this.token
    params.url = this.url
    params.method = 'get'
    return await _arrange.validation(params) 
  } 
}

module.exports = API;