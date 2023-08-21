const Product = require('../model/Product')

const getAllProducts = async (req, res) => {
    const { company, name, featured } = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;        
    }
    if(featured){
        queryObject.featured = featured;        
    }
    if(name){
        queryObject.name = { $regex: name, $options: "one"};        
    }

    const result = await Product.find(queryObject).sort("-price");
    res.status(200).json(result)
};

const getAllProductsTesting = async (req, res) => {
    const result = await Product.find(req.query).select("name");
    res.status(200).json(result)
};

module.exports = { getAllProducts, getAllProductsTesting}; 