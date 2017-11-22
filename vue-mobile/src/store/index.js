import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        login: false,
        news:[]
    },
    getters:{
        login : state=>{
            return state.login
        },
        news : state=>{
            return state.news
        },
    },
    mutations:{
        checkLogin:(state,payload)=>{
            state.login = payload
        },
        newsData:(state,payload)=>{
            axios.get('http://localhost:3000/product/list').then(res=>{
                console.log(res);
                state.news=res.data
            })
        }

    },
    actions:{
        checkLogin:({commit},payload)=>{
            commit ("checkLogin",payload)
        },
        newsData:({commit},payload)=>{
            commit ("newsData",payload)
        }
    }
})