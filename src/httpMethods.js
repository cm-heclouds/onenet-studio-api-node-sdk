const axios = require("axios");
const QS = require('querystring');
const _config = require('../config/index.js')

function get(params) {
  // 判断用户是否配置了url
  let conUrl
  if (params.url){
    conUrl = params.url
  }else{
    conUrl = _config.config.url
  }
  params.query.version = _config.config.version
  const queryContent = QS.stringify(params.query);
  const url = conUrl + '/' + params.path + '?' + queryContent
    return new Promise((resolve, reject) => {
      axios({
        headers: {
            'authorization': params.authorization
        },
        method: 'get',
        url
    })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
}

function post(params) {
  let conUrl
  if (params.url){
    conUrl = params.url
  }else{
    conUrl = _config.config.url
  }
  params.query.version = _config.config.version
  const queryContent = QS.stringify(params.query);
  const url = conUrl + '/' + params.path + '?' + queryContent
    return new Promise((resolve, reject) => {
      axios({
        headers: {
            'authorization': params.authorization,
            'Content-Type': 'application/json'
        },
        method: 'post',
        url,
        data: params.body
    })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
}
module.exports = {
  get,
  post
};