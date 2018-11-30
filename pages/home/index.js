//index.js
//获取应用实例
const app = getApp()
var wp = require('../../utils/util.js')
Page({
  data: {
      loadingHidden: true,
      hiddenModal: true,
      currentTab: 0,

      imagesGroup:[    
          {url:'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg'} ,    
          {url:'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg'} ,    
          {url:'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg'} ,    
          {url:'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'}     
          ],

      array:["中国","美国","巴西","日本"],  
      toast1Hidden:true,  
      modalHidden: true,  
      modalHidden2: true,  
      notice_str: '',  
      index:0 ,

      articleGroup:[
                    {
                      url: "../../images/my-on.png",
                      title: "Helin",
                      content: "This is my cat Fengfeng"
                    },
                    {
                      url: "../../images/my-on.png",
                      title: "Cissy",
                      content: "The sleeping cat is so cute!!!"
                    },
                    {
                      url: "../../images/my-on.png",
                      title: "Kalin",
                      content: "This is my reed"
                    },
                    {
                      url: "../../images/my-on.png",
                      title: "Mont",
                      content: "The good cat is so luck"
                    }
                 ]
    },
    // 测试封装的
    testModel:function(){
       // wp.showModel('this is titile','this is content ',function success(){
       //   if(true){
       //      console.log('ok回调')
       //    }
       // })
       // wp.showConfirm('cTitle','cContent',function success(){
       //   if(true){
       //     console.log('ok回调')
       //   }
       // })
       // wp.showLoading('加载中')
       // wp.showSuccess('success', function success(){
       //   if(true){
       //     console.log('成功')
       //   }
       // })
       // 请求实例
       // wp.getReq('interface/listdata',res=>{
       //      console.log('success')
       //      console.log(res.data)
       // },res=>{
       //      console.log('error')
       // })
       // post form
       // var data = {"name":"lang"}
       // wp.postReq('interface/listdata',data,res=>{
       //      console.log('success')
       //      console.log(res.data)
       // },res=>{
       //      console.log('error')
       // })
       // post JSON
       var data = {"name":"JSONlang"}
       wp.postReqJson('interface/listdata',data,res=>{
            console.log('success')
            console.log(res.data)
       },res=>{
            console.log('error')
       })

    },

    onLoad: function (options) {
      console.log(options)
    },
    sTab: function (e) {
      var that = this;
      that.setData({
        currentTab: e.detail.current
      });
    },
    clickTab: function (e) {
      var that = this;
      if (this.data.currentTab === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentTab: e.target.dataset.current
        })
      }
    },
    loadingTap: function(){
        this.setData({  
          loadingHidden: false  
        });  
        var that = this;  
        setTimeout(function(){  
          that.setData({  
              loadingHidden: true  
          });  
          that.update();  
        },3000);
    },
    listenerButton:function() {
        this.setData({
            hiddenModal: !this.data.hiddenModal
        })
    },
    listenerConfirm:function() {
      console.log('confirm')
        this.setData({
            hiddenModal: true
        })
    },

    listenerCancel:function() {
      console.log('cancel')
        this.setData({
            hiddenModal: true
        })
    },
     // 特效组件
      onReady: function () {
        this.animation = wx.createAnimation()
      },
      rotate: function () {
        this.animation.rotate(Math.random() * 720 - 360).step()
        this.setData({ animation: this.animation.export() })
      },
      scale: function () {
        this.animation.scale(Math.random() * 2).step()
        this.setData({ animation: this.animation.export() })
      },
      translate: function () {
        this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
        this.setData({ animation: this.animation.export() })
      },
      skew: function () {
        this.animation.skew(Math.random() * 90, Math.random() * 90).step()
        this.setData({ animation: this.animation.export() })
      },
      rotateAndScale: function () {
        this.animation.rotate(Math.random() * 720 - 360)
          .scale(Math.random() * 2)
          .step()
        this.setData({ animation: this.animation.export() })
      },
      rotateThenScale: function () {
        this.animation.rotate(Math.random() * 720 - 360).step()
          .scale(Math.random() * 2).step()
        this.setData({ animation: this.animation.export() })
      },
      all: function () {
        this.animation.rotate(Math.random() * 720 - 360)
          .scale(Math.random() * 2)
          .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
          .skew(Math.random() * 90, Math.random() * 90)
          .step()
        this.setData({ animation: this.animation.export() })
      },
      allInQueue: function () {
        this.animation.rotate(Math.random() * 720 - 360).step()
          .scale(Math.random() * 2).step()
          .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
          .skew(Math.random() * 90, Math.random() * 90).step()
        this.setData({ animation: this.animation.export() })
      },
      reset: function () {
        this.animation.rotate(0, 0)
          .scale(1)
          .translate(0, 0)
          .skew(0, 0)
          .step({ duration: 0 })
        this.setData({ animation: this.animation.export() })
      },
    // form提交
      toast1Change:function(e){  
        this.setData({toast1Hidden:true});  
      },  
      //弹出确认框  
      modalTap: function(e) {  
        this.setData({  
          modalHidden: false  
        })  
      },  
      confirm_one: function(e) {  
        console.log(e);  
        this.setData({  
          modalHidden: true,  
          toast1Hidden:false,  
          notice_str: '提交成功'  
        });  
      },  
      cancel_one: function(e) {  
        console.log(e);  
        this.setData({  
          modalHidden: true,  
          toast1Hidden:false,  
          notice_str: '取消成功'  
        });  
      },  
      //弹出提示框(无dom不显示)  
      modalTap2: function(e) {  
        this.setData({  
          modalHidden2: false  
        })  
      },  
      modalChange2: function(e) {  
        this.setData({  
          modalHidden2: true  
        })  
      },  
      bindPickerChange: function(e) {  
        console.log('picker发送选择改变，携带值为', e.detail.value)  
        this.setData({  
          index: e.detail.value  
        })  
      },    
      
      formSubmit: function(e) {  
        var that = this;  
        var formData = e.detail.value; 

        // 打印id
        console.log(e.target.id+'--------------id')
        // 打印文字内容
        console.log(e.target.dataset.text+'--------------text')
        // 判断
        if(formData.username.length==0||formData.age.length==0){  
              console.log("提交不完整");
              return false;
        };

   console.log(formData)  
        wx.request({  
          url: 'http://test.com:8080/test/socket.php?msg=2',  
          data: formData,  
          header: {  
              'Content-Type': 'application/json'  
          },  
          success: function(res) {  
            console.log(res.data)  
            that.modalTap();  
          }  
        })  
      },  
  formReset: function() {  
    console.log('form发生了reset事件');  
    this.modalTap2();  
  }  
    
})