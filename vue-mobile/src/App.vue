<template>
  <div>
    <mt-header title="weGame" :fixed='true' style="height:4rem">
      <!-- <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link> -->
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div style="height:41px"></div>

    <router-view></router-view>
    <div style="height:55px"></div>
    <mt-tabbar v-model="selected" :fixed='true' style="height:4rem">
      <mt-tab-item id="tab1" exact active-class="is-selected">
        <img slot="icon" src="./assets/c1.jpg">
        <router-link to="/" exact style='color:#242424;textDecoration: none'>首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="./assets/ca.jpg">
        <router-link to="/news" style='color:#242424;textDecoration: none'>新闻</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="./assets/lion.jpg">
        <router-link to="/product" style='color:#242424;textDecoration: none'>产品</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="./assets/cat.jpg">
       <router-link to="/carts" style='color:#242424;textDecoration: none'>购物车</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab5">
        <img slot="icon" src="./assets/ca2.jpg">
        <router-link to="/user" style='color:#242424;textDecoration: none'>我的</router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>  
  
</template>
<script>
import {mapGetters,mapActions} from "Vuex";
export default {
  data() {
    return {
      rangeValue: 10,
      selected:true
    };
  }
};
</script>