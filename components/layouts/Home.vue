<template>
<view class="container">
  <header :navigation="navigation"></header>
  <body :navigation="navigation"></body>
</view>
</template>
<script>
import Header from '../home/Header.vue';
import Body from '../home/Body.vue';
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
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
