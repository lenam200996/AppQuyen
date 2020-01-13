<template>
  <scroll-view class="body">
    <function></function>
    <news></news>
    <shop :navigation="navigation"></shop>
  </scroll-view>
</template>
  <script>
import Function from './layouts/Function.vue';
import News from './layouts/News.vue';
import Shop from './layouts/Shop.vue';
import store from '../../store/index'

export default {
  props: {
    navigation: {type: Object},
  },
  beforeMount() {
    //  console.log('tintuc',store.state.tintuc)
  },
  mounted() {
    // store.dispatch('sanpham')
    // store.dispatch('tintuc')
    
  },
  computed: {
    tintuc(){
      return store.state.tintuc
    }
  },
  watch: {
    tintuc(val){
      console.log('watch',val)
    }
  },
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
