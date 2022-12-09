const prod_controller = require("../model/product");
//create product
const create = async (req, res) => {
  try {
    const resp = await prod_controller.create({
      category_id: req.body.category_id,
      product: req.body.product,
    });

    const result = await resp.save();
    return res.status(200).json({
      responce: result,
      message: "record is created in db",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      responce: null,
      message: "unable to create the record",
    });
  }
};
//getall products
const cat_Product = async (req, res) => {
  let page = req.body.limit;
  let offset = req.body.skip;
  try {
    const resp = await prod_controller
      .find()
      .populate("category_id")
      .limit(page)
      .skip(offset)
      .exec();
    res.status(200).json({
      responce: resp,
      message: "successfuly finding records",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      responce: null,
      message: "unable to find the record",
    });
  }
};
const cat_ByProd1 = async (req, res) => {
  try {
    const resp = await prod_controller.findOne({
      where: {
        category_id: req.body.category_id,
      },
    });
    res.status(200).json({
      responce: resp,
      message: "successfuly finding records",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      responce: null,
      message: "unable to find the record",
    });
  }
};
module.exports={
    create,
    cat_Product,
    cat_ByProd1
}
