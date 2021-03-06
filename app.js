const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended : true}));

app.use(express.static("public"));

app.set('view engine','ejs');

let items = ["buy food","cook food","eat food"];
app.get("/",function(req,res){
    let today  = new Date();

    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    let day = today.toLocaleDateString("en-US",options);

    res.render("list",{kindofday : day , newlistitem : items});

});

app.post("/",function(req,res){
    item = req.body.newitem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("server is running at : 3000");
});


