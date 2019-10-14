<template>
<View class="container">
  <header></header>
  <body></body>
</View>
</template>
<script>
import Header from '../shop/Header.vue';
import Body from '../shop/Body.vue';
export default {
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

