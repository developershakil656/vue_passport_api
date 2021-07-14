<template>
      <div class="col-md-6 mx-auto">
        <div class="card">
            <div class="card-header">
                <h4>Admin Login</h4>
            </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" v-model="credentials.email">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="credentials.password">
              </div>
              <div class="text-end">
                <router-link class="btn btn-danger m-2" :to="{name:'Home'}">Cancel</router-link>
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>  
</template>

<script>
// @ is an alias to /src
import FormLayout from "../../layouts/FormLayout.vue";
export default {
  name: "A-login",
  created(){
    this.$emit('update:layout',FormLayout)
  },
  data(){
    return{
      credentials:{
        email:'admin@gmail.com',
        password:'password'
      }
    }
  },
  methods:{
    login(){
      this.$store.dispatch('adminLogin',this.credentials).then(()=>{
        toastr.success("welcome to admin panel!");
        this.$router.push({
          name: 'ADashbord'
        })
      }).catch(error=>{
        toastr.info(error)
      });

    }
  }
};
</script>
