<template>
<div>
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#"
            ><img src="../assets/logo.png" alt="" style="width: 40px"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
              <router-link class="nav-link" to="/About">About</router-link>
              <router-link class="nav-link" :to="{name:'CLogin'}" v-if="!CLogedIn">Login</router-link>
              <router-link class="nav-link" :to="{name:'CDashbord'}" v-if="CLogedIn">Dashbord</router-link>
              <router-link class="nav-link" :to="{name:'CLogout'}" v-if="CLogedIn">Logout</router-link>
              <router-link class="nav-link" :to="{name:'ALogin'}">Admin</router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
</div>
</template>

<script>
export default {
  name: "MyNav",
  computed:{
    CLogedIn(){
      return this.$store.getters.CLogedIn;
    }
  }
};
</script>

