const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.get("/",function(req,res){
    var today  = new Date();

    if(today.getDate() === 4 || today.getDate() === 0){
        res.send("yay,it's weekend");
    }
    else{
        res.write("<h1>booo!,I have to work</h1>");
        res.write("<h1>booo!,I have to work</h1>");
        res.write("<h1>booo!,I have to work</h1>");
        res.send();
    }

})


app.listen(3000,function(){
    console.log("server is running at : 3000");
});


