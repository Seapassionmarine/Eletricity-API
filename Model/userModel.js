const mongoose = require ('mongoose')
const nepaSchema = new mongoose.Schema({

    customerName:{type:String,required:[true,'customer name is required']},
    Address:{type:String,required:[true,'Address is required']},
    MeterNo:{type:Number},
    DateOfPayment:{type:Date},
    Subscription:{type:String,required:[true,'kindly pay an amount before we can create your account']},
    PhoneNumber:{
        type:String,unique:true,required:[true,'kindly provide your phone number']
    },
    Outstanding:{type:Number,default:0},
    conversion:{type:Number,default:function(){
        return (this.amountSubscibed/66.7).toFixed(2)
    }}
},{timestamps:true})

const nepaModel = mongoose.model('eletricity model',nepaSchema)
module.exports = nepaModel 