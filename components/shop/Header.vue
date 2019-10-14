<template>
  <View class="header-shop">
    <view class="icon-header">
      <Icon name="shopping-cart" :size="20" color="#eb6641"></Icon>
    </view>
    <view class="center-header">
      <text class="title-center">Giao hàng đến</text>
      <text class="value-centent">Nhập địa chỉ chuyển hàng</text>
    </view>
  </View>
</template>
<script>
import Icon from 'react-native-vector-icons/FontAwesome';
export default {
  components: {
    Icon,
  },
};
</script>
<style scoped>
.header-shop {
  background-color: #fff;
  width: 100%;
  height: 40px;
  padding-left: 10;
  border-bottom-width: 1;
  border-bottom-color: #ccc;
  flex-direction: row;
}
.icon-header {
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.center-header {
  flex-direction: column;
}
.title-center {
  font-size: 12px;
  color: #eb6641;
}
.value-centent {
  font-size: 10px;
  color: #54657e;
}
</style>
