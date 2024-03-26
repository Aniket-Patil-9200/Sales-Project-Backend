let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema({
    name: { type: String, required: false },
    mrp: { type: String, required: true },
    price: { type: String, required: true },
    gst: { type: String, required: true },
    image: { type: String }
})

let Product = mongoose.model("products", schema);

module.exports = Product;