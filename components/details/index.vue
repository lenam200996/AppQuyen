<template>
  <view class="wrap-detail">
    <header></header>
    <view class="view-header">
        <image v-bind:source="{uri: value.anh}" class="image-detail" ></image>
        <view class="meta-detail">
            <text class="proc-name">{{value.ten}}</text>
            <text class="proc-price">{{value.gia}} d</text>
        </view>
    </view>
    <view class="line-hoz"></view>
    <view class="des-wrap">
        <text class="des-title">Mô tả sản phẩm</text>
        <text class="des-text">{{value.mota}}</text>
    </view>
    <view class="line-hoz"></view>
    <!-- <view class="use-diem" v-if="token != '' && token != null">
        <text>Sử dụng điểm</text>
        <Picker v-bind:style="{height: 50, width: 100}" v-bind:onValueChange="changePicker">
            <PickerItem v-bind:label="'0'" v-bind:value="0" />
            <PickerItem v-for="d in arrayDiem" v-bind:key="d" v-bind:label="d.toString()" v-bind:value="d" />
        </Picker>
        <Text>Đã giảm giá : {{diemPicker}}đ</Text>
    </view> -->
    <view class="submit-form">
        <view class="sl-proc">
             <Icon name="minus-circle" :size="18" :color="sl>1?'#eb6641':'#cccccc'" v-bind:onPress="mimus"/>
             <Text class="numb">{{sl}}</Text>
              <Icon name="plus-circle" :size="18" :color="sl<10?'#eb6641':'#cccccc'" v-bind:onPress="plus"/>
        </view>
        <TouchableOpacity class="submit-btn" v-bind:onPress="addToCart">
            <text class="text-price" >{{price*sl-diemPicker}}</text>
        </TouchableOpacity>
    </view>
    <TouchableOpacity class="mess-cart" v-if="openMessCart" v-bind:onPress="naviToCart">
        <text class="mess-text" >Đã thêm. Xem giỏ hàng</text>
    </TouchableOpacity>
  </view>
</template>
<script>
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../home/Header.vue';
import { TouchableOpacity, Alert} from 'react-native';
import Picker from 'react-native';
import PickerItem from 'react-native';
import store from '../../store/index';

export default {
  props: {
    navigation: {type: Object},
  },
  data() {
      return {
          value: null,
          sl : 1,
          price : 0,
          diemPicker: 0,
          openMessCart:false
      }
  },
  created() {
      this.value = this.navigation.getParam('value',null)
      this.price = parseInt(this.value.gia)
  },
  components: {
    Header,Icon
  },
  methods: {
    mimus(){
        this.sl > 1 ?this.sl-- : null
    },
    plus(){
        this.sl < 10 ?this.sl++ : null
    },
    addToCart(){
        if(this.token != '' && this.token != null){
            var data = {
                userid :this.user,
                procID : this.value.id,
                thanhtien : this.price*this.sl - this.diemPicker,
                soluong :this.sl,
                tensp : this.value.ten
            }
            store.dispatch('addToCart',data)
               store.dispatch('giohang')
            this.openMessCart = true
        }else{
            Alert.alert('Đăng nhập','Vui lòng đăng nhập trước',[
                {
                    text :'Đăng nhập', onPress:()=> this.navigation.navigate('Account')
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                }
            ])
        }
       
    },
    naviToCart(){
        this.navigation.navigate('Cart')
            // sanpham
            
    },
    changePicker(ev){
        // console.log(ev)
        this.diemPicker = ev
    }
  },
  computed: {
    user() {
      return store.state.user;
    },
    token() {
      return store.state.token;
    },
    getNavigation(){
        return this.navigation
    },
    diem(){
        return store.state.diem
    },
    arrayDiem(){
        var d = this.diem
        if(d < 10000 )return []
        var arr = []
        for( var i = 1 ;i<= parseInt(this.price*this.sl/d);i++){
            if(10000*i <= d){
            arr.push(10000*i)
            }
        }
        console.log(arr)
        return arr
        
    }
  },
  watch: {
      getNavigation(val){
         this.value = this.navigation.getParam('value',null)
        this.price = parseInt(this.value.gia)
      }
  },
};
</script>
<style scoped>
.wrap-detail{
    flex: 1;
    flex-direction: column;
    position: relative;
}
.view-header{
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px;
    padding: 10px;
}
.image-detail{
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.meta-detail{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.des-wrap{
    width: 100%;
    flex: 3;
    padding: 10px;
    text-align: justify;
}
.line-hoz{
    width: 100%;
    height: 1px;
    background-color: #cccccc;
    opacity: 0.5;
}
.proc-name{
    font-size: 14px;
    color: #202224;
    font-weight: bold;
}
.proc-price{
    font-size: 12px;
    color: red;
}
.des-title{
    font-size: 14px;
    color: #202224;
    font-weight: bold;
}
.des-text{
    font-size: 12px;
    color: #202224;
}
.submit-form{
    flex: 3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.sl-proc{
    display: flex;
    flex-direction: row;
    padding: 10px;
}
.numb{
    margin-right: 10px;
    margin-left: 10px; 
}
.submit-btn{
    width: 100px;
    height: 40px;
    background-color: #eb6641;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-top: 5px;
    
}
.text-price{
    color: #ffffff;
}
.mess-cart{
    width: 100%;
    height: 50px;
    background-color: #eb6641;
    position: absolute;
    bottom: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mess-text{
    color: #ffffff;
    font-size: 13px;
}
</style>