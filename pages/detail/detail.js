// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo:null,
    // 推荐视频
    othersList: null,
    // 评论数据
    commentData: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // options可以接收地址栏传过来的参数
    let videoId = options.id
    this.getCurrentVideo(videoId)
    this.getOthersList(videoId)
    this.getCommentList(videoId)
    console.log(options)
  },

  // 根据视频id获取视频详情
  getCurrentVideo(videoId) {
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id="+videoId,
      success:(res) => {
        if(res.data.code === 0) {
          console.log(res)
          this.setData({
            videoInfo: res.data.data.videoInfo
          })
          
        }
      }
    })
  },

  // 获取推荐视频
  getOthersList(videoId) {
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id="+videoId,
      success: (res) => {
        console.log(res)
        if(res.data.code === 0) {
          this.setData({
            othersList: res.data.data.othersList
          })
        }
      }
    })
  },

  // 获取评论数据
  getCommentList(videoId) {
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id="+videoId,
      success: (res) => {
        console.log(res)
        if(res.data.code === 0){
          this.setData({
            commentData: res.data.data.commentData
          })
        }
      }
    })
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