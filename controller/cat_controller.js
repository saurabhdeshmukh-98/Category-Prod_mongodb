const cat_controller = require("../model/category");
const prod_controller = require("../model/product");
//const { rawListeners } = require("../model/categories");

const create = async (req, res) => {
  try {
    const resp = await cat_controller.create({
      provider_id: req.body.provider_id,
      category_type: req.body.category_type,
    });
    const result = await resp.save();
    return res.status(200).json({
      responce: result,
      message: "data insert into db...",
    });
    console.log(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      responce: null,
      message: "data not inserted into db...",
    });
  }
};
const cat_Main = async (req, res) => {
  let page = req.body.limit;
  let offset = req.body.skip;

  try {
    const resp = await cat_controller
      .find()
      .populate("prov_id")
      .limit(page)
      .skip(offset)
      .exec();
    res.status(200).json({
      responce: resp,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "unable to find the record",
      responce: null,
    });
  }
};
const removeById = async (req, res) => {
  try {
    const parentDel = await cat_controller.deleteOne({
      where: {
        prov_id: req.body.prov_id,
      },
    });
    const childDel = await prod_controller.deleteOne({
      where: {
        category_id: parentDel.prov_id,
      },
    });
    console.log(parentDel, childDel);
    res.status(200).json({
      message: "record deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      responce: null,
      message: "not removing..",
    });
  }
};
const categoriesByProduct2 = async (req, res) => {
  try {
    const resp = await cat_controller.findOne({
      where: {
        prov_id: req.body.prov_id,
      },
    });
    res.status(200).json({
      responce: resp,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "unable to find the record",
      responce: null,
    });
  }
};
module.exports = {
  create,
  cat_Main,
  removeById,
  categoriesByProduct2
};
