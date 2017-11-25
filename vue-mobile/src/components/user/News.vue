<template>
  <div>
    <h1>news</h1>
    <ul>
      <!-- <li style='textAlign:left;margin:1rem' v-for="list in lists" :key="list.name">{{list.name}}</li> -->
    </ul>
        
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
          <li v-for="list in lists" :key="list._id" style='overflow:hidden;margin:1rem'>
            <div><img v-lazy='list.img' alt="list.name"></div>
            <span style='color: #242424;lineHeight:2rem'>{{list.name}}</span>
            <div style='textAlign:left'>
                  <mt-button type="primary" :data='list._id' @click="addWords($event)"> 评论</mt-button>
                  <div style='textAlign:left'>我的评论：<span class="comment_word">{{list.words}}</span></div>
              </div>
            <div style="textAlign:right;"><span style='color: #242424;'>{{list.date.slice(0, 10)}}</span></div>
          </li>
        </ul>
      </mt-loadmore>
  </div>
</template>

<script>
import { MessageBox,Indicator,Loadmore } from 'mint-ui';
export default {
  data() {
    return {
      lists: {},
     allLoaded: true
    };
  },
  methods: {
    loadTop() {

    },
    
    loadBottom() {

    },
    addWords(e){ 
      var self=this;  
      MessageBox.prompt('请输入评论').then(({ value, action }) => {
        self.$http.put('http://localhost:3000/news/data/'+e.target.getAttribute('data'),{words:value})
        self.$router.replace('/news')
        Indicator.open({
        text: '上传中...', 
        spinnerType: 'fading-circle'
        }); 
        setTimeout(()=>{Indicator.close()},1500)
});
    },
    getData() {
      this.$http.post("http://localhost:3000/news/list").then(res => {
        this.lists = res.data.rows;

       
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>

</style>

