<template>
  <view class="header-home">
    <view class="avatar">
      <image :source="require('../../assets/images/test.jpg')" class="image-avatar">
    </view>
    <view class="user-name">
      <text class="name">
        Quyen Le
        <text class="count-star">| 0</text>
      </text>
    </view>
    <view class="notification">
      <Icon name="bell-o" :size="18" color="#eb6641" />
    </view>
  </view>
</template>
<script>
// import {Icon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
export default {
  components: {
    Icon,
  },
};
</script>
<style scoped>
.header-home {
  background-color: #fff;
  width: 100%;
  height: 40px;
  padding-left: 10;
  border-bottom-width: 1;
  border-bottom-color: #ccc;
  flex-direction: row;
}
.image-avatar {
  width: 30;
  height: 30;
  border-radius: 15;
  margin: 5;
}
.avatar {
  width: 30;
  height: 40;
  flex: 1;
}
.user-name {
  height: 40;
  flex: 8;
  justify-content: flex-end;
  font-size: 12;
  padding-bottom: 5;
}
.name {
  color: #b3b0b0;
}
.count-star {
  color: #000;
}
.notification {
  flex: 1;
  height: 40;
  justify-content: center;
  align-items: center;
}
</style>
