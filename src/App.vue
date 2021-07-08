<template>
  <div>
    <MyNav/>
    <router-view />
  </div>
</template>

<script>
import MyNav from './components/MyNav.vue'
export default {
  components:{
    MyNav,
  }
}
</script>

