module.exports = {
  getReq:getReq,
  postReq:postReq,
  postReqJson:postReqJson,

  formatTime:formatTime,
  showModel:showModel,
  showConfirm:showConfirm,
  showLoading:showLoading,
  showSuccess:showSuccess
}
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//碳层
function showModel(o, n, s) {
  wx.showModal({
      title: o,
      content: n,
      showCancel: !1,
      success: function(o) {
        o.confirm && "function" == typeof s && s()
      }
    })
  }
function showConfirm(o, n, s) {
  wx.showModal({
      title: o,
      content: n,
      success: function(o) {
        o.confirm && "function" == typeof s && s()
      }
    })
 }    
function showLoading (o) {
   wx.showLoading({
      title: o,
      icon: "loading",
      mask: !0,
      duration: 1e4
    })
 }
function showSuccess (o,s) {
    wx.showToast({
      title: o,
      icon: "success",
      duration: 2e3,
      success: function () {
        "function" == typeof s && s()
      }
    })
}
// 请求
const api = "https://www.baidu.com/" //baseURL
function getReq(url, success, error){
    // let token = wx.getStorageSync('token');视情况添加
    wx.request({
        url: api + url,
        method: 'GET',
        header: {"content-type": "application/json;charset=UTF-8"},
        success: function(res){
            success(res.data)
        },
        fail: function(res){
            error()
        } 
    })
}
function postReq(url, data, success, error){
    // let token = wx.getStorageSync('token');视情况添加
    wx.request({
        url: api + url,
        method: 'POST',
        data: data,
        header: {"content-type": "application/x-www-form-urlencoded;charset=UTF-8"},
        success: function(res){
            success(res.data)
        },
        fail: function(res){
            error()
        } 
    })
}
function postReqJson(url, data, success, error){
    // let token = wx.getStorageSync('token');视情况添加
    wx.request({
        url: api + url,
        method: 'POST',
        data: data,
        header: {"content-type": "application/json;charset=UTF-8"},
        success: function(res){
            success(res.data)
        },
        fail: function(res){
            error()
        } 
    })
}
