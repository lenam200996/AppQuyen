<template>
  <View class="news-layout">
    <Text class="title-layouts" v-bind:onPress="chitiet">Tin tức</Text>
    <!-- <scroll-view> -->
      <flat-list
        :horizontal="true"
        :showsHorizontalScrollIndicator="false"
        :data="news"
        :render-item="(item) => (renderItem(item))"
      />
    <!-- </scroll-view> -->
  </View>
</template>
<script>
import React from 'react';
import {Text, View} from 'react-native';
import store from '../../../store/index'
import Item from './NewItem.vue';
export default {
  data() {
    return {
      news :[]
    }
  },
  components: {
    Item,
  },
  beforeCreate() {
    // await store.dispatch('tintuc')
    // this.news = store.state.tintuc
  },
  created() {
// console.log('tt new',store.state.tintuc)
  },
  mounted() {
    // setTimeout(()=>{this.news = store.state.tintuc},300)
  },
  computed: {
    tintuc(){
      return store.state.tintuc
    }
  },
  watch: {
    tintuc(val){
      this.news = store.state.tintuc
    }
  },
  methods: {
    renderItem(item) {
      return <Item value={item} />;
    },
     chitiet(){
      
    }
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
     font-size: 13px;
  font-weight: bold;
}
</style>