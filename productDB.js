require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./model/Product')
const ProductJson = require('./product.json')

const start = async ()=>{
    try {
        await connectDB(process.env.MONGOURL)
        await Product.create(ProductJson)
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}

start()