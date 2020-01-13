import Vue from 'vue-native-core';
import Vuex from 'vuex';
Vue.use(Vuex);
var base64 = require('base-64');

const store = new Vuex.Store({
  actions: {
    register({ commit }, { fullname, username, password }) {
      return new Promise(() => {
        commit('register', { fullname, username, password })
      })
    },
    login({ commit }, { username, password }) {
      return new Promise(() => {
        commit('login', { username, password })
      })
    },
    sanpham({ commit }) {
      return new Promise(() => {
        commit('sanpham')
      })
    },
    addToCart({ commit },data) {
      return new Promise(() => {
        commit('addToCart',data)
      })
    },
    
    tintuc({ commit }) {
      return new Promise(() => {
        commit('tintuc')
      })
    },
    giohang({ commit }) {
      return new Promise(() => {
        commit('giohang')
      })
    },
    
    xacnhandonhang({ commit },data) {
      return new Promise(() => {
        commit('xacnhandonhang',data)
      })
    },
    logout({commit}){
      commit('logout')
    }
  },
  mutations: {
    async register(state, { fullname, username, password }) {
      var bodyString = "fullname=" + fullname + "&username=" + username + "&password=" + password
      // console.log(bodyString)
      const response = await fetch('http://10.0.3.2:2019/auth/register', {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: bodyString
      })
      const myJson = await response.json();
      state.statusMess = myJson
    },
    async addToCart(state, data) {
      var bodyString = "procID=" + data.procID + "&soluong=" + data.soluong + "&thanhtien=" + data.thanhtien+"&userid="+data.userid+"&tensp="+data.tensp
      // console.log(bodyString)
      const response = await fetch('http://10.0.3.2:2019/products/cart', {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: bodyString
      })
      const myJson = await response.json();
      state.statusMess = myJson
    },
    async xacnhandonhang(state, data) {
      // console.log( window.btoa(unescape(encodeURIComponent(data.list))))
      var bodyString = "name=" + data.name + "&address=" + data.address + "&phone=" + data.phone+"&thanhtien="+data.thanhtien+"&list="+ data.list+"&user="+state.user+"&sale="+data.sale
      const response = await fetch('http://10.0.3.2:2019/products/cart/accept', {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: bodyString
      })
      state.giohang = []
      const myJson = await response.json();
      state.statusMess = myJson
    },
    
    async login(state, { username, password }) {
      var bodyString = "username=" + username + "&password=" + password
      const response = await fetch('http://10.0.3.2:2019/auth/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: bodyString
      })
      const myJson = await response.json();
      state.statusMess = myJson.data.success.toString()
      state.token = myJson.data.token
      // localStorage.setItem('token',state.token)
      // var userinfo
      const dataToken =state.token? state.token.split('.')[1]:""
      state.fullname = JSON.parse(base64.decode(dataToken)).fullname
      state.user  = JSON.parse(base64.decode(dataToken)).username
      state.diem = JSON.parse(base64.decode(dataToken)).diem
      // state.fullname = localStorage.getItem('token')
    },
    async sanpham(state) {
      const response = await fetch('http://10.0.3.2:2019/products/list', {
          method: 'get',
          mode: 'cors',
      })
      const myJson = await response.json();
      state.sanpham = JSON.parse(myJson).data
    },
    async tintuc(state) {
      const response = await fetch('http://10.0.3.2:2019/news/list', {
          method: 'get',
          mode: 'cors',
      })
      const myJson = await response.json();
      state.tintuc = JSON.parse(myJson).data
    },
    async giohang(state) {
      const response = await fetch('http://10.0.3.2:2019/products/get/cart', {
          method: 'get',
          mode: 'cors',
      })
      const myJson = await response.json();
      state.giohang = JSON.parse(myJson).data
    },
    logout(state){
      state.user = null,
      state.token = "",
      state.fullname = ""
    }
  },

  state: {
    statusMess : "",
    user:null,
    diem: 0,
    token : "",
    fullname:"",
    sanpham : [],
    tintuc : [],
    giohang : []
  },
  getters:{
    getTintuc:state => state.tintuc,
  }
});

export default store;