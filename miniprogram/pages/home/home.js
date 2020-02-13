// pages/home/home.js
import dateFormat from '../../utils/dateFormat.js'

Page({

  
  data: {
    taskList: []
  },

  addTask: function () {
    // const db = wx.cloud.database()
    // db.collection('task').add({
    //   data: {
    //     name: "About study",
    //     userid: wx.getStorageSync('userinfo').userid,
    //     createTime: new Date(),
    //     updateTime: new Date(),
    //     status: 0 // 0未完成 1完成 2删除
    //   }
    // }).then(res => {
    //   console.log(res);
    // })
  },

  toTodoPage: function (e) {
    let index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: "../todo/todo?taskid"+"="+this.data.taskList[index]._id,
    })
  },

  parseDate: function (date) {
    return dateFormat(date)
  },

  //加载时候被调用，可以携带参数
  onLoad: function (options) {

  },

  
  onReady: function () {

  },

  //显示的时候被调用，不可以携带参数
  onShow: function () {
    const db = wx.cloud.database()
    db.collection('task').where({
      userid: wx.getStorageSync('userinfo').userid,
      status: 0 //未完成的
    }).get().then(res => {
      console.log(res)
      let resList = res.data.map(task => {
        Object.assign(task, {createTime: this.parseDate(task.createTime)})
        return task
      })
      this.setData({
        taskList: resList
      })
    })
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