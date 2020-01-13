<template>
<View class="container">
  <header></header>
  <body :navigation="navigation"></body>
</View>
</template>
<script>
import Header from '../shop/Header.vue';
import Body from '../shop/Body.vue';
export default {
  props: {
    navigation: {type: Object},
  },
  components: {
    Header,
    Body,
  },
};
</script>
<style scoped>
.container {
  background-color: white;
  flex: 1;
}
</style>

