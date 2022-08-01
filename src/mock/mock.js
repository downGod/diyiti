const Mock = require('mockjs')
const obj = {user:"admin",psd:123456}
Mock.mock("/cont","post",(config)=>{
   const con = JSON.parse(config.body)
    if(con.user==obj.user && con.psd==obj.psd){
        return {
            message:"请求成功",
            status:200
        }
    }else{
        return {
            message:"请求失败",
            status:100
        }
    }
})