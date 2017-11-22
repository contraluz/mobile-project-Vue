<template>
  <div>
    <div class='user_bg' >
      <img width='100' height='100' src="../../assets/lion.jpg" alt="lion" style="verticalAlign:middle"/>
      <span style='verticalAlign:middle;lineHeight:100px;fontSize:30px'>{{list.name}}</span>
    </div>
    <div class='user_bg' >
      <p style='lineHeight:50px;fontSize:20px'>Email：{{list.email}}</p>
      <p style='lineHeight:50px;fontSize:20px'>年龄：{{list.age}}</p>
    </div>
    <div class='user_bg' >
      <p style='lineHeight:50px;fontSize:20px'>会员码：{{list._id}}</p>
    </div>
     <div class='user_bg' >
       <div style='lineHeight:30px;fontSize:20px'>我的爱好：</div>
      <ul>
          <li style='lineHeight:50px;fontSize:20px' v-for="hobyArr in hobyArr" :key="hobyArr">{{ hobyArr }}</li>
      </ul>
    </div>
  </div>
</template>

<script>



export default {
  
    data(){
      
      return{
        list:{},
        hobyArr:[]
      }
    },
    methods:{
      getData(){
        this.$http.post('http://localhost:3000/users/list')
        .then(res=>{
          this.list=res.data.rows[0]
          
          this.hobyArr=res.data.rows[0].hobys.split(",")
          
        })
      }
    },
    created(){
      this.getData();
    }
}
</script>

<style>
body{
  color:dimgray
}
</style>

