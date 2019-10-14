<template>
  <View class="container">
    <flat-list
      :showsHorizontalScrollIndicator="false"
      :numColumns="2"
      :data="[{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'}]"
      :render-item="(item) => (renderItem(item))"
    />
  </View>
</template>
<script>
import Item from './layouts/ShopItem.vue';
import React from 'react';
export default {
  methods:{
    renderItem(item){
       return <Item value={{title: item.item.key}} />;
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

