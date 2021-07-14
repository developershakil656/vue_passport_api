<template>
  <div class="container py-5">
    <div>
      <p>loggin out</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "C-logout",
  created(){
    this.$store.dispatch('CLogout').then(()=>{
        toastr.success('logout success.')
        this.$router.push({
          name: 'CLogin'
        })
      }).catch(error=>{
        toastr.info(error)
        this.$router.push({
          name: "CDashbord"
        })
      });
  }
};
</script>
