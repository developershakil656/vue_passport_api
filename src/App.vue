<template>
  <v-app>
    <component :is="layout">
    <router-view v-model:layout.sync="layout"/>
    </component>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      layout:`div`,
    }
  }
}
</script>