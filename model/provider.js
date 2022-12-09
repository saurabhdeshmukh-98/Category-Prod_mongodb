const mongoose=require('mongoose')
const prov_schema=new mongoose.Schema({
    prov_id:{
        type:Number,
        required:true
    },
    prov_name:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
module.exports=mongoose.model('provider',prov_schema)