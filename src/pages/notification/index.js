/*
 * @Author: mulingyuer
 * @Date: 2021-08-14 23:57:31
 * @LastEditTime: 2021-08-15 00:02:38
 * @LastEditors: mulingyuer
 * @Description: 评论卡片页
 * @FilePath: \JJ\src\pages\notification\index.js
 * 怎么可能会有bug！！！
 */
import "./index.scss";

//js
import $ from "jquery";
import { Search, BlogMenu, CollectHeader } from "@/scripts/header"; //header
import LoginDialog from "@/scripts/login-dialog";
import BackTop from "@/scripts/back-top";
import FaceReplace from "@/scripts/face-replace";


$(function () {


  //搜索
  const search = new Search();
  //博客功能按钮
  const blogMenu = new BlogMenu();


  //收起动画
  const collectHeader = new CollectHeader();

  //登录弹窗
  new LoginDialog();

  //返回顶部
  new BackTop();









})