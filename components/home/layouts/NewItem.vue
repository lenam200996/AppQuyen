<template>
  <View class="news-item"
    v-shadow="2"
  >
    <image :source="{uri: getValue.anh}" class="image-news"></image>
    <View
      class="content-news"
    >
        <Text class="content">{{getValue.noidung}}</Text>
    </View>
    <Text class="btn-details-news" v-bind:onPress="chitiet">Chi tiet</Text>
  </View>
</template>
<script>
import { Alert } from 'react-native';
import store from '../../../store/index'

export default {
  props: {
    value: {
      type: Object,
    },
  },
  methods: {
    chitiet(){
      console.log(store.state.tintuc)
    }
  },
  computed: {
    getValue(){
      return this.value.item
    }
  },
  mounted() {
    console.log(this.getValue)
  },
};
</script>
<style scoped>
.news-item {
    width: 160px;
    margin: 5px;
    background-color: #ffffff;
    justify-content: center;
    border-radius: 5px;
    overflow: hidden;
  /* box-shadow: 0px 3px 15px rgba(55, 67, 85, 0.15); */
  /* align-items: center; */
}
.image-news {
    width: 100%;
    height: 100px;
}
.content-news {
    width: 100%;
    height: 60px;
    padding: 5px;
}
.content{
    color: #374355;
    font-size: 12px;

}
.btn-details-news{
    color: #eb6641;
    border-width: 1px;
    border-color: #eb6641;
    padding: 2px;
    border-radius: 5px;
    width: 80px;
    justify-content: center;
    align-items: center;
    margin: 5px;
    margin-left: 15px;
    text-align: center;
}
</style>
