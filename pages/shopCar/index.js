//shopCar.js
Page({
  data:{
  		msg:"modealMsg"
  },
  tapName:function(event){
  	console.log(event);
  	console.log(this.data.msg);
  	console.log(wx)//wx object zongfangfa 
  	wx.showLoading();
  	wx.showModal({
  	    title: 'title',
  	    content: "content",
  	    showCancel: true,
  	    success:function(res){
  	    	if(res.confirm){
  	    		console.log('ok')
  	    	}
  	    	if(res.cancel){
  	    		console.log('cancel')
  	    	};
  	    }
  	})
  }


})
