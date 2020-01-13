<template>
  <View class="container">
    <flat-list
      :showsHorizontalScrollIndicator="false"
      :numColumns="2"
      :data="sanpham"
      :render-item="(item) => (renderItem(item))"
    />
  </View>
</template>
<script>
import Item from './layouts/ShopItem.vue';
import React from 'react';
import store from '../../store/index'
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
  created() {
    
    setTimeout(()=>{this.sanpham = store.state.sanpham},100)
  },
  methods:{
    renderItem(item){
       return <Item navigation={this.navigation} value={item} />;
    }
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  background-color: #e4e5ea;
  align-items: center;
  margin-bottom: 50px; 
}
</style>

