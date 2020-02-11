// pages/todo/todo.js
Page({

  
  data: {
    todoList:[{
      content: "About the action you want to do",
      status: true, // true:unfinish false:finish
    }],
    isAddItemFormShow: false,
    inputContent: "",
    deleteIndex: -1,
    isMenuShow: true,
    animationData: {}
  },

  onShow: function () {
    
  },


  addOneItem: function (event) {
    this.setData({
      isAddItemFormShow: true,
    });
  },

  getInputValue: function (e) {
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

  doneTodos: function (event) {
    let finishItems = this.data.todoList.filter(item => {
      return item.status == false;
    });
    let unfinishItems = this.data.todoList.filter(item => {
      return item.stauts == true;
    })
  
  },
  
  clickMenu: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })

    this.animation = animation;

    if (this.data.isMenuShow) {
      animation.width(60).step();
    } else {
      animation.width(280).step();
    }

    this.setData({
      animationData: animation.export(),
    });

    setTimeout(function() {
      this.setData({
        isMenuShow: !this.data.isMenuShow
      })
    }.bind(this), 400);
  },


})