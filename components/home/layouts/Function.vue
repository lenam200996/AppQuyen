<template>
  <View class="function-layout">
    <View class="item-function">
      <Icon name="mobile-phone" :size="25" color="red"></Icon>
      <Text class="function-name">Tich diem</Text>
    </View>
    <View class="item-function">
      <Icon name="motorcycle" :size="25" color="red"></Icon>
      <Text class="function-name">Dat hang</Text>
    </View>
    <View class="item-function">
      <Icon name="ticket" :size="25" color="red"></Icon>
      <Text class="function-name">Coupon</Text>
    </View>
    <View class="item-function">
      <Icon name="gift" :size="25" color="red"></Icon>
      <Text class="function-name">Doi uu dai</Text>
    </View>
  </View>
</template>
<script>
import Icon from 'react-native-vector-icons/FontAwesome';
export default {
  components: {Icon},
};
</script>
<style scoped>
.function-layout {
  flex: 1;
  background-color: #ffffff;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  padding: 15px;
}
.item-function {
  width: 30%;
  height: 80px;
  margin: 1%;
  justify-content: center;
  align-items: center;
  /* float: left; */
}
.function-name{
  color: #374355;
  font-size: 12px;
}
</style>