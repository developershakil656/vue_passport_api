<template>
  <div>
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#"
            ><img src="../../assets/logo.png" alt="" style="width: 40px"
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
              <router-link
                class="nav-link"
                :to="{ name: 'ADashbord' }"
                v-if="ALogedIn"
                >Dashbord</router-link
              >
              <a class="nav-link" role='button' @click="logout">Logout</a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <slot />

    <footer class="footer">
      <p class="mt-2">developed by shakil hossain</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("ALogout").then(() => {
          toastr.success("Admin logout success.");
            this.$router.push({
            name: "Home",
          })
        .catch((error) => {
            toastr.info(error);
            this.$router.push({
              name: "ADashbord",
            });
        });
      });
    },
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #212529;
  color: white;
  text-align: center;
  height: 50px;
}
</style>