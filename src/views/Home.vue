<template>
  <div class="container">
    <h1>home</h1>
    <div class="row">
      <div class="col-md-3" v-for="post in posts" :key="post.title">
      <div class="card" style="width: 18rem;">
        <img :src="post.image" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">{{post.title}}</h5>
          <p class="card-text">{{post.content}}</p>
        </div>
      </div>
     
      </div>
     
    </div>
  </div>
</template>

<script>
import HomeLayout from '../layouts/HomeLayout'
export default {
  name: "Home",
  created(){
    this.$emit('update:layout',HomeLayout)
  },
  mounted(){
    this.$store.dispatch("activePosts");
    
  },
  computed:{
    posts(){
      return this.$store.getters.posts;
    }
  }
}


</script>
