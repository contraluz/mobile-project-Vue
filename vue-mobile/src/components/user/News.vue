<template>
  <div>
    <h1>news</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: {},
     
    };
  },
  methods: {
    getData() {
      this.$http.post("http://localhost:3000/news/list").then(res => {
        this.list = res;
        console.log(this.list);
       
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

