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
      openid: app.globalData.openid
    }).get().then(res => {
      console.log(res);
      if (res.data.length <= 0) {
        db.collection('user').add({
          data: {
            name: "",
            openid: app.globalData.openid
          },
          success: res => {
            let userinfo = {
              userid: res._id,
              openid: app.globalData.openid,
              name: ""
            }
            wx.setStorageSync("userinfo", userinfo)
            wx.navigateTo({
              url: '../initialSetting/initialSetting',
            })
          },
          fail: err => {
            wx.showToast({
              title: 'fail to use!',
            })
          }
        })
      } else if (res.data[0].name.length <= 0) {
        wx.navigateTo({
          url: '../initialSetting/initialSetting',
        })
      }
      else {
        wx.navigateTo({
          url: '../home/home',
        })
      }
    })
    
  },
  
})