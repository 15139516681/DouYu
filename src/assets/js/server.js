import Vue from 'vue'
import axios from 'axios'
var server = axios.create({
	setTimeout:10000
})
server.interceptors.request.use(config=>{
	return config
}, error => {
	return Promise.reject(error)
})
server.interceptors.response.use(res=>{
	return Promise.resolve(res)
}, error=>{
	return Promise.reject(error)
})
export default server