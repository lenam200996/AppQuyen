<template>
  <View class="shop-layout">
    <Text class="title-layouts">Sản phẩm nổi bật</Text>
    <flat-list
      :showsHorizontalScrollIndicator="false"
      :numColumns="2"
      :data="[{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'}]"
      :render-item="(item) => (renderItem(item))"
    />
  </View>
</template>
<script>
import Item from './ShopItem.vue';
import React from 'react';
export default {
  methods: {
    renderItem(item) {
      return <Item value={{title: item.item.key}} />;
    },
  },
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
}
</style>