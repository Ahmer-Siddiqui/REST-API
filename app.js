const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res)=>{
    res.send("HI! I am Ahmer")
})

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