const Product = require('../model/Product')

const getAllProducts = async (req, res) => {
    const { company } = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;        
    }

    const result = await Product.find(queryObject);
    res.status(200).json(result)
};

const getAllProductsTesting = async (req, res) => {
    const result = await Product.find();
    res.status(200).json(result)
};

module.exports = { getAllProducts, getAllProductsTesting};