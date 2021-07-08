import { createStore } from "vuex";
import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/'

export default createStore({
  state: {
    CToken: localStorage.getItem('CToken') || null,
  },
  getters:{
    CLogedIn(state){
      return state.CToken !==null ;
    }
  },
  mutations: {
    CLogin(state,res){
      state.CToken = res.token
    },
    CLogout(state){
      state.CToken= null
    }
  },
  actions: {
    login(context,credentials){
      return new Promise((resolve,reject)=>{
        axios.post('creator/login',{
          'email':credentials.email,
          'password':credentials.password,
        }).then(res=>{
          localStorage.setItem('CToken',res.data.data.token)
          context.commit('CLogin',res.data.data)

          resolve(res.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },

    CLogout(context){
      return new Promise((resolve,reject)=>{
        axios.defaults.headers.common["Authorization"] = "Bearer " + this.state.CToken;
        axios.post('creator/logout').then(res=>{
          localStorage.removeItem('CToken')
          context.commit('CLogout')
          resolve(res.data)
        }).catch(error=>{
          reject(error)
        })
      })
    }
  },
  modules: {},
});
