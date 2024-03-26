let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema({
    date: { type:String, required: false },
    customer: { type: String, required: true },
    mobileno: { type: Number, required: true },

    grandTotal : { type: Number, required: true },
    
    products:[
        {   
         
           productid: { type: mongoose.Schema.Types.ObjectId, ref:'product', required:true},
           name:{type:String,required:true},
           mrp:{type:Number,required:true},
           price: { type: Number,required:true},
           quantity: { type: Number,required:true},
           subtotal: { type: Number,required:true},
           gst: { type: Number,required:true},
           gsttotal: { type: Number,required:true},
           billtotal: { type: Number,required:true},
        }
      ]

})

let Sale = mongoose.model("sales", schema);

module.exports = Sale;