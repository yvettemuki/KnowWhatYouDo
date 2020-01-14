// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todoList:[{
      content: "Typeflow editor coding",
      status: true,
    }, {
      content: "Tofel Reading",
      status: true,
    }, {
      content: "Tofel Listening",
      status: true,
    }
    ],
    isAddItemFormShow: false,
    inputContent: "",
    deleteIndex: -1,
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
      status: true,
    })
    this.setData({
      isAddItemFormShow: false,
      todoList: this.data.todoList,
    })
  },

  finishItem: function (event) {
    let index = event.currentTarget.dataset['index'];
    let status = `todoList[${index}].status`;
    this.setData({
      [status]: !this.data.todoList[index].status
    })
  },

  deleteItem: function (event) {
    let delIndex = event.currentTarget.dataset['index'];
    this.setData({
      deleteIndex: delIndex,
    })
  },

  deleteSelectedOne: function (event) {
    let delIndex = event.currentTarget.dataset['index'];
    let allTodoList = this.data.todoList;
    let newTodoList = [];
    newTodoList = allTodoList.filter((todo) => {
      let index = allTodoList.indexOf(todo);
      if (index != delIndex) {
        return todo;
      }
    });
    this.setData({
      todoList: newTodoList,
      deleteIndex: -1
    })
  },

  refreshStatus: function (event) {
    this.setData({
      deleteIndex: -1,
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