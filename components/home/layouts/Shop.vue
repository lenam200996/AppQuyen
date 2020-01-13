<template>
  <View class="shop-layout">
    <Text class="title-layouts">Sản phẩm nổi bật</Text>
    <flat-list
      :showsHorizontalScrollIndicator="false"
      :numColumns="2"
      :data="sanpham"
      :render-item="(item) => (renderItem(item))"
    />
  </View>
</template>
<script>
import Item from './ShopItem.vue';
import React from 'react';
import store from '../../../store/index'
import { Alert } from 'react-native';
export default {
  props: {
    navigation: {type: Object},
  },
  data() {
    return {
      sanpham : []
    }
  },
  mounted() {
    store.dispatch('sanpham')
  },
  computed: {
    getSanpham(){
      return store.state.sanpham
    }
  },
  watch: {
    getSanpham(val){
      this.sanpham = store.state.sanpham
    }
  },
  methods:{
    renderItem(item){
       return <Item navigation={this.navigation} value={item} />;
    }
  }
};
</script>
<style scoped>
.shop-layout {
  flex: 1;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  flex-direction: column;
}
.title-layouts {
  /* width: 100%; */
  color: #374355;
  font-size: 13px;
  font-weight: bold;
}
</style>