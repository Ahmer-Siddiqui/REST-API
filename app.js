const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

const products_routes = require('./routes/products')

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