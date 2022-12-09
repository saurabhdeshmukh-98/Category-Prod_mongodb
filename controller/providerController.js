const { response } = require("express");
const prov_controller = require("../model/provider");

const create = async (req, res) => {
  try {
    const { id, name } = req.body;
    const resp = await prov_controller.create({
      id,
      name,
    });
    const result = await resp.save();
    return res.status(200).json({
      message: "record is created in db",
      res: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "unable to create the record",
      error: error,
    });
  }
};

const prov_Find = async (req, res) => {
  try {
    const resp = await prov_controller.find().populate("id");
    res.status(200).json({
      response: resp,
      message: "successfuly finding the record",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      response: null,
      message: "unable to find the record",
    });
  }
};
module.exports={
    create,
    prov_Find
}