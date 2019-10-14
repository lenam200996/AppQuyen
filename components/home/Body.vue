<template>
  <scroll-view class="body">
    <function></function>
    <news></news>
    <shop></shop>
  </scroll-view>
</template>
  <script>
import Function from './layouts/Function.vue';
import News from './layouts/News.vue';
import Shop from './layouts/Shop.vue';

export default {
  components: {
    Function,
    News,
    Shop
  },
};
</script>
  <style scoped>
.body {
  width: 100%;
  background-color: #e4e5ea;
}
</style>
