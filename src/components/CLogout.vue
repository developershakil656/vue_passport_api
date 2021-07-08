<template>
  <div class="container py-5">
    <div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "C-login",
  created(){
    this.$store.dispatch('CLogout').then(()=>{
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
