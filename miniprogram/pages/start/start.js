const app = getApp();

Page({

  data: {
    
  },

  onLoad: function (options) {
    this.getOpenid();
  },

  getOpenid: function () {
    wx.cloud.callFunction({
      name:'login',
      data:{},
      success: res => {
        app.globalData.openid = res.result.openid
        this.getUserInfo();
      },
      fail: err => {
        console.log('[云函数] [login] 调用失败', err);
      }

    })
  },

  getUserInfo: function () {
    const db = wx.cloud.database();
    db.collection('user').where({
      _openid: app.globalData.openid
    }).get().then(res => {
      console.log(res);
      if (res.data.length <= 0) {
        db.collection('user').add({
          data: {
            openid: app.globalData.openid
          },
          success: res => {
            wx.navigateTo({
              url: '../todo/todo',
            })
          },
          fail: err => {
            wx.showToast({
              title: 'fail to use!',
            })
          }
        })
      }
      wx.navigateTo({
        url: '../todo/todo',
      })
    })
    
  },
  
})