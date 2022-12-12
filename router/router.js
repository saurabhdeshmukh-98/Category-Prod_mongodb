const router=require('express').Router()
const Category=require('../controller/cat_controller')
const product=require('../controller/prod_controller')
const provider=require('../controller/providerController')
const { model}=require('mongoose')

router.post('/provider/save',provider.create)
router.post('/category/create', Category.create)
router.post('/product/create',product.create)
router.get('/provider/fetch', provider.prov_Find)
router.get('/category/populate', Category.cat_Main)
router.delete('/category/remove',Category.removeById)
router.get('/category/findByid',Category.categoriesByProduct2)
router.get('/product/find',product.cat_Product)
router.get('/product/fetchById',product.cat_ByProd1)

module.exports=router