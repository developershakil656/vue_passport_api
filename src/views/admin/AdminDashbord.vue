<template>
      <div class="container">
        <h1 class="text-center">Admin Dashbord</h1>
        <h2 class="text-center">User Management</h2>
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
            <tr v-for="(creator,index) in creators" :key="creator.title">
              <th scope="row">{{++index}}</th>
              <td>{{creator.name}}</td>
              <td>{{creator.email}}</td>
              <td>{{creator.created_at}}</td>
            </tr>
          </tbody>
        </table>
      </div>
</template>

<script>
// @ is an alias to /src
import AdminLayout from "../../layouts/admin/AdminLayout.vue";
export default {
  name: "Admin-Dashbord",
  created(){
    this.$emit('update:layout',AdminLayout)
  },
  mounted(){
    this.$store.dispatch("creators");
  },
  computed:{
    creators(){
      return this.$store.getters.creators
    }
  }
};
</script>
