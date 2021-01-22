<template>
  <div class="header-part">
    <a > <img class="logo-img" src="../assets/logo.png"></a>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
    text-color="#111" router>
       <el-menu-item index="Home">
         <img class="icon-img" src="../assets/icon/sy.png" />
         <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="Recommendation">
        <img class="icon-img" src="../assets/icon/tj.png" />
        <span slot="title">推荐</span>
      </el-menu-item>
      <el-menu-item index="Video" >
        <img class="icon-img" src="../assets/icon/sp.png" />
        <span slot="title">视频</span>
      </el-menu-item>
      <el-menu-item index="Article" >
        <img class="icon-img" src="../assets/icon/tw.png" />
        <span slot="title">图文</span>
      </el-menu-item>
      <el-menu-item index="Topic" >
        <img class="icon-img" src="../assets/icon/ht.png" />
        <span slot="title">话题</span>
      </el-menu-item>
      <el-menu-item index="Attention" >
        <img class="icon-img" src="../assets/icon/gz.png" />
        <span slot="title">关注</span>
      </el-menu-item>
    </el-menu>
    <div class="header-right">
      <router-link to="/login"><img class="icon-img" src="../assets/icon/dl.png" /><span>登录</span></router-link>
      <router-link to="/register"><img class="icon-img" src="../assets/icon/zc.png" /><span>注册</span></router-link>
      <router-link to="/">
        <button class="post-btn"><img class="btn-img" src="../assets/icon/ftz.png" /><span>发帖</span></button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LifeHeader',
    data () {
      return {
        activeIndex: 'Home'
      }
    },
    computed:{
          activeIndex(){
            return this.$route.path.replace('/pages','')
          }
        },
    methods:{
      handleSelect(index) {
        console.log(index);
      }
    }
  }
</script>

<style>
  .header-part {
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .logo-img {
      width: 120px;
      height: 60px;

  }
  .el-menu-item {
    font-size: 18px;
  }
  .el-menu.el-menu--horizontal {
      border-bottom: none;
  }
  .icon-img {
     width: 20px;
  }
  .header-right {
    font-size: 18px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header-right a {
    color: #111;
    text-decoration: none;
    width: 100px;
    text-align: center
  }
  .header-right button {
    background-color: #92ba7c;
    color: #fff;
    width: 110px;
        height: 40px;
        border-radius: 20px;
        border: none;
        font-size: 18px;
  }
  .btn-img {
    width: 36px;
  }
</style>
