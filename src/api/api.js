import server from '../assets/js/server.js'
var menu = function(url){
	return new Promise((resolve,reject)=>{
		server.get(url).then(res=>{
			resolve(res)
		})
	})
}

const getList = function(params){
	return new Promise((resolve,reject)=>{
		server.get(`/room/list?page=${params.page}&type=${params.type}`).then(res=>{
			resolve(res)
		})
	})
}
var search = function(url,keyword,count = 0){
	return new Promise((reslove,reject)=>{
		server.post(url,{
			sk:keyword,
			offset:count,
			limit:20
		}).then(res=>{
			reslove(res)
		})
	})
}
export {menu, getList, search}