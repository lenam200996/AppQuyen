<template>
  <View class="news-layout">
    <Text class="title-layouts">Tin tức</Text>
    <!-- <scroll-view> -->
      <flat-list
        :horizontal="true"
        :showsHorizontalScrollIndicator="false"
        :data="[{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'}]"
        :render-item="(item) => (renderItem(item))"
      />
    <!-- </scroll-view> -->
  </View>
</template>
<script>
import React from 'react';
import {Text, View} from 'react-native';
import Item from './NewItem.vue';
export default {
  components: {
    Item,
  },
  methods: {
    renderItem(item) {
      return <Item value={{title: item.item.key}} />;
    },
  },
};
</script>
<style scoped>
.news-layout {
  flex: 1;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-wrap: nowrap;
  flex-direction: column;
  padding-left: 10px;
}
.title-layouts{
    /* width: 100%; */
    color: #374355;
}
</style>