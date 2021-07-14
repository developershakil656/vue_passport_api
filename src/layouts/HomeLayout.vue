<template>
  <div>
    <MyNav/>
    <slot/>
    <footer class="footer">
      <p class="mt-2">developed by shakil hossain</p>
    </footer>
  </div>
</template>

<script>
import MyNav from '../components/MyNav.vue'
export default {
  components:{
    MyNav,
  }
}
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