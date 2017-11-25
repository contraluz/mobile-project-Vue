<template>
  <div>
    <h1>选购您的商品~</h1>
    <ul>
       <li style='lineHeight:40px;fontSize:20px;listStyle:none;margin:50px 0 20px' v-for="list in lists" :key="list.name">
         <img v-lazy='list.img' alt="list.name" width='300' height="288"/>
         <h3 style="color:deepskyblue;margin:0">
           {{ list.name }} <span class="goods_price">&nbsp;会员价：￥{{ list.price }}</span>
          </h3>
         <p style="color:skyblue">{{ list.content }}</p>
         <mt-button type="primary" :data='list._id' @click="addToCarts($event)">加入购物车</mt-button>
      </li>
    </ul>
    
  </div>
</template>

<script>
import {mapGetters,mapActions } from "Vuex";

export default {
  data() {
    return {
      lists: {}
    };
  },
  computed:{
    ...mapGetters(["news"]),
  },
  methods: {
    ...mapActions(['newsData']),
    addToCarts(e){
      // console.log(e.target)
      console.log(e.target.getAttribute('data'))
    },
    getData() {
      this.$http.get("http://localhost:3000/product/list").then(res => {
        this.lists = res.data;
        // console.log(this.lists);
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
.goods_price{
  font-size: 16px;
  color:lightseagreen
}
</style>
