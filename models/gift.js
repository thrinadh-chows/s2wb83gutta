const mongoose = require("mongoose") 
const giftSchema = mongoose.Schema({ 
    gifttype: String, 
    occasion: String, 
    cost: Number 
 
}) 
 
module.exports = mongoose.model("Gift", giftSchema) 