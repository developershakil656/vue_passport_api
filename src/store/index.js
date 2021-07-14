import { createStore } from "vuex";
import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/'

export default createStore({
  state: {
    CToken: localStorage.getItem('CToken') || null,
    AToken: localStorage.getItem('AToken') || null,
    posts:[],
    allPosts:[],
    creators:[]
  },
  getters:{
    CLogedIn(state){
      return state.CToken !==null ;
    },
    ALogedIn(state){
      return state.AToken !==null ;
    },
    posts(state){
      return state.posts
    },
    allPosts(state){
      return state.allPosts
    },
    creators(state){
      return state.creators
    }
  },
  mutations: {
    CLogin(state,res){
      state.CToken = res.token
    },
    CLogout(state){
      state.CToken= null
    },
    
    ALogin(state,res){
      state.AToken = res.token
    },
    ALogout(state){
      state.AToken= null
    },

    //posts
    posts(state,res){
      state.posts = res
    },

    allPosts(state,res){
      state.allPosts = res
    },

    //creators
    creators(state,res){
      state.creators = res
    }
  },
  actions: {
    //posts
    activePosts(context){
      axios.get("posts").then(res=>{
        context.commit("posts",res.data.data)
      }).catch(error=>{
        return error;
      })
    },

    allPosts(context){
      axios.defaults.headers.common["Authorization"] = "Bearer " + this.state.CToken;
      axios.get("post").then(res=>{
        context.commit("allPosts",res.data.data)
      }).catch(error=>{
        return error;
      })
    },
    //creators
    creators(context){
      axios.defaults.headers.common["Authorization"] = "Bearer " + this.state.AToken;
      axios.get("admin/creators").then(res=>{
        context.commit("creators",res.data.data)
      }).catch(error=>{
        return error;
      })
    },

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
    },

    adminLogin(context,credentials){
      return new Promise((resolve,reject)=>{
        axios.post('admin/login',{
          'email':credentials.email,
          'password':credentials.password,
        }).then(res=>{
          localStorage.setItem('AToken',res.data.data.token)
          context.commit('ALogin',res.data.data)

          resolve(res.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },

    ALogout(context){
      return new Promise((resolve,reject)=>{
        axios.defaults.headers.common["Authorization"] = "Bearer " + this.state.AToken;
        axios.post('admin/logout').then(res=>{
          localStorage.removeItem('AToken')
          context.commit('ALogout')
          resolve(res.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    
  },
  modules: {},
});
