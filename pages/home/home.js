// pages/home/home.js
import {config} from "../../config/config";
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        grid: [],
        activityD: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        this.initAllData()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */  onUnload() {


    },

    async initAllData() {
        const theme = new Theme()
        await theme.getThemes()

        const themeA = await theme.getHomeLocationA()
        const themeE = await theme.getHomeLocationE()
        const bannerB = await Banner.getHomeLocationB()
        const grid = await Category.getHomeLocationC()
        const activityD = await Activity.getHomeLocationD()
        this.setData({
            themeA,
            themeE,
            bannerB,
            grid,
            activityD

        })

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})