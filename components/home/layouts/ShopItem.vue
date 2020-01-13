<template>
<!-- <TouchableOpacity v-bind:onPress="toDetail"> -->
  <TouchableOpacity class="shop-item"
   v-bind:onPress="toDetail"
  >
    <image v-bind:source="{uri: getValue.anh}" class="image-shop" v-bind:onPress="toDetail"></image>
    <View
      class="content-shop"
    >
        <Text class="content" >{{getValue.ten}}</Text>
    </View>
    <View class="btn-product">
      <Text class="price">{{getValue.gia}}</Text>
      <Icon name="plus-circle" :size="18" color="#eb6641" />
    </View>
  </TouchableOpacity>
  <!-- </TouchableOpacity> -->
</template>
<script>
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity  } from 'react-native';

export default {
  components: {
    Icon,TouchableOpacity
  },
  props: {
    value: {
      type: Object,
    },
    navigation: {type: Object},
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

  /* box-shadow: 0px 3px 15px rgba(55, 67, 85, 0.15); */
  /* align-items: center; */
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
    font-size: 12px;

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
