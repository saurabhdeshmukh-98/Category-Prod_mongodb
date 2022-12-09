const mongoose = require('mongoose');
const provider=require('../model/provider')
const product=require('../model/product')

const cat_Schema = new mongoose.Schema({
  provider_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: provider,
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: product,
  },
  category_type: {
    type:String,
    required: true,
  },
});
module.exports =  mongoose.model('Category', cat_Schema);
