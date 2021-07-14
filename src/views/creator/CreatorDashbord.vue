<template>
  <div class="container">
    <h2 class="text-center">Post Management</h2>
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post,index) in posts" :key="post.title">
          <th scope="row">{{++index}}</th>
          <td><img :src="post.image" style="width:150px"></td>
          <td>{{post.title}}</td>
          <td>{{post.content}}</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script>
import HomeLayout from '../../layouts/HomeLayout'
export default {
  name: "dashbord",
  created(){
    this.$emit('update:layout',HomeLayout)
  },
  mounted(){
    this.$store.dispatch("allPosts");
  },
  computed:{
    posts(){
      return this.$store.getters.allPosts
    }
  }
}
</script>
