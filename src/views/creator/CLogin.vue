<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="card">
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
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "C-login",
  data(){
    return{
      credentials:{
        email:'creator@gmail.com',
        password:'password'
      }
    }
  },
  methods:{
    login(){
      this.$store.dispatch('login',this.credentials).then(()=>{
        this.$router.push({
          name: 'Home'
        })
      }).catch(error=>{
        console.log(error)
      });
    }
  }
};
</script>
