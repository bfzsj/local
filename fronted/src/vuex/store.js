import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//注册vuex
Vue.use(Vuex)

const state={
  userinfo:JSON.parse(sessionStorage.getItem('userinfo')),
  userList:[],
	city:[],
	county:JSON.parse(sessionStorage.getItem('county')),
	catalogs:[],
  simpleCata:JSON.parse(sessionStorage.getItem('simpleCata')),
  details:JSON.parse(sessionStorage.getItem('detail'))
};
//mutation主要操作state
const mutations={
  SAVE_USERINFO(state,userinfo){
    //存入本地存储
    sessionStorage.setItem('userinfo',JSON.stringify(userinfo))
    state.userinfo=userinfo;

  },
  GET_USERLIST(state,userlist){
    state.userList=userlist;
  },
  add_USERLIST(state,userlist){
    state.userList.push(userlist)
  },
  delete_USERLIST(state,id){
    state.userList.splice(id, 1);

  },
	GET_CITY(state,city){
		state.city=city;
	},
	add_CITY(state,city){
		state.city.push(city)
	},
	SAVE_CITY(state,county){

		state.county=county
    sessionStorage.setItem('county',JSON.stringify(county))
	},
	GET_CATALOG(state,catalogs){
		state.catalogs=catalogs;
	},
	add_CATALOG(state,catalog){
		state.catalogs.push(catalog)

	},
  delete_CATALOG(state,id){
    state.catalogs.forEach(function(item,index){
      if(item.CAT_ID==id){
        state.catalogs.splice(index, 1);

      }
    })

  },
	update_CATALOG(state,catalog){
		state.catalogs.forEach(function(item){
			if(item.CAT_ID==catalog.CAT_ID){
				item=item

			}
		})
	},
  save_SIMPLECATA(state,catalog){

	  state.simpleCata=catalog;
    sessionStorage.setItem('simpleCata',JSON.stringify(catalog))
  },
  save_Details(state,detail){

    state.details=detail
    sessionStorage.setItem('detail',JSON.stringify(detail))
  }
};

//action 异步的 主要是commit mutation 由mutation改变状态

const actions={
  GET_USERLIST({commit}){
    return new Promise((resolve,reject)=>{
        axios.post('/user-information/getAll').then(response=>{

        commit('GET_USERLIST',response.data)
          resolve();
      })
    })
  },
	GET_CITY({commit}){
		return new Promise((resolve,reject)=>{
			axios.post('/shanxilocal/getAll').then(response=>{

					commit('GET_CITY',response.data)
			    resolve();
			})
		})
	},
	GET_CATALOG({commit}){
		return new Promise((resolve,reject)=>{
			axios.post('/catalog/getAll').then(response=>{

					commit('GET_CATALOG',response.data)
			    resolve();
			})
		})
	},


};

const getters={
  vipUsers:state=>state.userList.filter(v=>v.VIP_LEVEL=="VIP")
};
//创建仓库暴露出去
export  default  new Vuex.Store({
  state,mutations,actions,getters
})
