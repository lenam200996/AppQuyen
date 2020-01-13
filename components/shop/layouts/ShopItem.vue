<template>
  <TouchableOpacity class="shop-item"
  v-bind:onPress="toDetail"
  >
    <image v-bind:source="{uri: getValue.anh}" class="image-shop"></image>
    <View
      class="content-shop"
    >
        <Text class="content">{{getValue.ten}}</Text>
    </View>
    <View class="btn-product">
      <Text class="price">{{getValue.gia}}</Text>
      <Icon name="plus-circle" :size="18" color="#eb6641" />
    </View>
  </TouchableOpacity>
</template>
<script>
import Icon from 'react-native-vector-icons/FontAwesome';
import { Alert, TouchableOpacity } from 'react-native';

export default {
  components: {
    Icon,
  },
  props: {
    value: {
      type: Object,
      
    },
    navigation: {type: Object},
  },
  mounted() {
  },
  computed: {
    getValue(){
      return this.$props.value.item
    }
  },
  methods: {
    toDetail(){
      this.navigation.navigate('Detail',{value : this.getValue})
    }
  },
};
</script>
<style scoped>
.shop-item {
    width: 46%;
    margin: 2%;
    background-color: #ffffff;
    justify-content: center;
    border-radius: 5px;
    overflow: hidden;
    border-width: 1px;
    border-color: #ececec9d;
}
.image-shop {
    width: 100%;
    height: 150px;
}
.content-shop {
    width: 100%;
    height: 40px;
    padding: 5px;
}
.content{
    color: #374355;
    font-size: 14px;
}
.btn-product{
  height: 30px;
  width: 100%;
  border-top-width: 1px;
  border-color: #eb6641;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
.price{
  color: #374355;
  font-size: 12px;
}
</style>
