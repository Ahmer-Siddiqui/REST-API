const express = require('express');
const dotEnv = require('dotenv').config()
const PORT = process.env.PORT || 4000;
const connectDB = require('./db/connect');
const app = express();
connectDB();

const products_routes = require('./routes/products');
app.get("/", (req, res)=>{ 
    res.send("HI! I am Ahmer")
})

// middleware or to set router
app.use("/api/products", products_routes) 

const start = async ()=>{ 
try{
    app.listen(PORT,()=>{ 
        console.log(`Server is running on port: ${PORT}`);
    })
}
catch(error){
    console.log(error); 
}

}
start()