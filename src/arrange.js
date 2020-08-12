const httpMethods = require('./httpMethods.js')
/**
 * @方法和路径获取，并请求方法
 * 对传参进行验证
 */
// 获取方法和路径，并调用请求方法
function validation(params) {
  if (params.method === 'get'){
    return new Promise((resolve, reject) => {
      httpMethods.get(params).then(res=>{
        resolve(res)
      })
    })
  }
  if (params.method === 'post'){
    return new Promise((resolve, reject) => {
      httpMethods.post(params).then(res=>{
        resolve(res)
      })
    }) 
  }
}
module.exports = {
  validation
};