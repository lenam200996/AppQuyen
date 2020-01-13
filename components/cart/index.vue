<template>
    <TouchableOpacity class="wrap-cart">
        <header></header>
        <!-- <text v-bind:onPress="test">test</text> -->
        <Text>Thông tin đơn hàng</Text>
        <view class="info-user">
            <view class="row-info">
                <Icon class="icon" name="user-o" color="#eb6641" :size="16"/>
                <text-input
                    class="text-input-container"
                    placeholder="Name"
                    v-model="name"
                />
            </view>
            <view class="row-info">
                <Icon class="icon" name="phone" color="#eb6641" :size="16"/>
                <text-input
                    class="text-input-container"
                    placeholder="Phone"
                    v-model="phone"
                />
            </view>
            <view class="row-info">
                <Icon class="icon" name="map-marker" color="#eb6641" :size="16"/>
                <text-input
                    class="text-input-container"
                    placeholder="Address"
                    v-model="address"
                />
            </view>
        </view>
        <Text>Chi tiết đơn hàng</Text>
        <view class="wrap-order">
            <TouchableOpacity class="proc-item" v-for="cart in getCart" :key="cart.id">
                <text class="proc-name" > {{cart.tensp}}({{cart.soluong}})</text>
                <text class="proc-price">{{cart.thanhtien}}</text>
            </TouchableOpacity>
        </view>
        <TouchableOpacity v-if="carts.length > 0" v-bind:onPress="deleteProduct"><text>Hủy đơn hàng</text></TouchableOpacity>
        <view class="use-diem" v-if="token != '' && token != null">
        <text>Sử dụng điểm</text>
        <Picker v-bind:style="{height: 50, width: 100}" v-bind:onValueChange="changePicker">
            <PickerItem v-bind:label="'0'" v-bind:value="0" />
            <PickerItem v-for="d in arrayDiem" v-bind:key="d" v-bind:label="d.toString()" v-bind:value="d" />
        </Picker>
        <Text>Đã giảm giá : {{diemPicker}}đ</Text>
        </view>
        <TouchableOpacity class="btn-order" v-bind:onPress="ordered">
            <view></view>
            <Text class="text-or">Đặt hàng</Text>
            <Text class="text-or">{{getPriceBill}}</Text>
        </TouchableOpacity>
    <view>
</template>
<script>
import Header from '../home/Header.vue';
import store from '../../store/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity ,Alert} from 'react-native';
import Picker from 'react-native';
import PickerItem from 'react-native';
export default {
    props: {
        navigation: {type: Object},
    },
    components:{
        Header,Icon,TouchableOpacity
    },
    data() {
        return {
            carts : [],
            name:"",
            phone : "",
            address : "",
             diemPicker: 0,
        }
    },
    created() {
        this.carts = store.state.giohang
         
    },
    mounted() {
         store.dispatch('giohang')
    },
    methods: {
        test(){
            // console.log(this.carts)
        },
        ordered(){
            var listOrde = []
            this.carts.forEach(i =>{
                listOrde.push({
                    tensp : i.tensp,
                    soluong :i.soluong
                })
            })
            var list = ""
            listOrde.forEach( i => {
                list+= JSON.stringify(i)+","
            })
            // console.log(list)
            var data = {
                name : this.name,
                address : this.address,
                phone :this.phone,
                list : list,
                thanhtien : this.getPriceBill.toString(),
                sale : this.diemPicker
            }
            this.carts = []
            this.diemPicker
            store.dispatch('xacnhandonhang',data)
            Alert.alert('Thành công','Xác nhận đơn hàng thành công!')
        },
         changePicker(ev){
        // console.log(ev)
        this.diemPicker = ev
        },
        deleteProduct(){
            // console.log(id)
            this.carts = []
        }
    },
    computed: {
        user() {
        return store.state.user;
        },
        token() {
        return store.state.token;
        },
        giohang (){
            return store.state.giohang
        },
        getCart(){
            return this.carts.filter( i => i.userid == this.user)
        },
         diem(){
        return store.state.diem
    },
        getPrice(){

            var total = 0
            this.getCart.forEach(i => {
                total += parseInt(i.thanhtien)
            })
            return total 
        },
        getPriceBill(){
            console.log(this.carts.filter( i => i.userid == this.user))
            return parseInt(this.getPrice) - parseInt(this.diemPicker)
        },
        arrayDiem(){
        var d = this.diem
        if(d < 10000 )return []
        var arr = []
        for( var i = 1 ;i<= parseInt(this.getPrice);i++){
            if(10000*i <= d){
            arr.push(10000*i)
            }
        }
        console.log(arr)
        return arr
        
    }
  },
  watch: {
      giohang(val){
          this.carts = val
          
      }
  },
}
</script>
<style scoped>
.wrap-cart{
    padding-top: 10px;
    padding-left: 5px;
    position: relative;
    height: 100%;
    width: 100%;
}
.info-user{
    padding-top: 5px;
}
.row-info{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.icon{
    margin: 5px;
}
.proc-item{
     display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.wrap-order{
    padding-top: 5px;
    padding-left: 5px;
    /* padding-right: 5px; */
}
.btn-order{
    position: absolute;
    width: 101%;
    padding-right: 5px;
    height: 50px;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: #eb6641;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.text-or{
    color: #ffffff;
    font-size: 13px;
    font-weight: bold;
}
.proc-name{
    color: #eb6641;
}
</style>