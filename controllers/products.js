const Product = require('../model/Product')

const getAllProducts = async (req, res) => {
    const result = await Product.find();
    res.status(200).json(result)
};

const getAllProductsTesting = async (req, res) => {
    const result = await Product.find();
    res.status(200).json(result)
};

module.exports = { getAllProducts, getAllProductsTesting};