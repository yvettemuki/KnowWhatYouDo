// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todoList:[{
      content: "Typeflow editor coding",
    }, {
      content: "Tofel Reading"
    }, {
      content: "Tofel Listening"
    }
    ],
    isAddItemFormShow: false,
    inputContent: "",
  },

  addOneItem: function (event) {
    this.setData({
      isAddItemFormShow: true,
    });
  },

  inputContent: function (e) {
    this.setData({
      inputContent: e.detail.value
    })
  },

  confirmAddOne: function (event) {
    console.log(this.data.inputContent);
    this.data.todoList.push({
      content: this.data.inputContent,
    })
    this.setData({
      isAddItemFormShow: false,
      todoList: this.data.todoList,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})