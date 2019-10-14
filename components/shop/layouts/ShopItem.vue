<template>
  <View class="shop-item"
  >
    <image :source="require('../../../assets/images/test.jpg')" class="image-shop"></image>
    <View
      class="content-shop"
    >
        <Text class="content">Cafe aabc</Text>
    </View>
    <View class="btn-product">
      <Text class="price">55.000d</Text>
      <Icon name="plus-circle" :size="18" color="#eb6641" />
    </View>
  </View>
</template>
<script>
import Icon from 'react-native-vector-icons/FontAwesome';
export default {
  components: {
    Icon,
  },
  props: {
    value: {
      type: Object,
    },
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
