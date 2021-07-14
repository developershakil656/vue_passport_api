<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script>
import HomeLayout from '../layouts/HomeLayout'
export default {
  name: "about",
  created(){
    this.$emit("update:layout",HomeLayout)
  }
}
</script>