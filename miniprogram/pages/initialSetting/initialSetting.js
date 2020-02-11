// pages/initialSetting/initialSetting.js
Page({

  
  data: {
    inputContent: "",
    userinfo: "",
  },

  confirmAddName: function () {
    console.log(this.data.userinfo.userid);
    const db = wx.cloud.database()
    db.collection('user').doc(this.data.userinfo.userid).update({
      data: {
        name: this.data.inputContent
      }
    }).then(res => {
      let oldUserInfo = this.data.userinfo
      console.log(this.data.userinfo)
      let newUserInfo = Object.assign(oldUserInfo, {
        name: this.data.inputContent
      })
      wx.setStorageSync("userinfo", newUserInfo)
      wx.navigateTo({
        url: '../home/home',
      })
    })
  },

  getInputValue: function (e) {
    this.setData({
      inputContent: e.detail.value
    })
  },

  onLoad: function (options) {
    let userinfo = wx.getStorageSync("userinfo");
    console.log(userinfo);
    this.setData({
      userinfo: userinfo
    })
  },

  
  onReady: function () {

  },

  
  onShow: function () {
  
  },

  
  onHide: function () {

  },

  
  onUnload: function () {

  },

  
  onPullDownRefresh: function () {

  },

  
  onReachBottom: function () {

  },

  
  onShareAppMessage: function () {

  }
})