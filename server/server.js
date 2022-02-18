"use strict";




const bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs');
const path = require('path');

const request2 = require('request');

const dataBaseName = 'coffee_and_tea';
const username = encodeURIComponent('myadmin');
const password = encodeURIComponent('Abcd13579');
const authMechanism = "DEFAULT";
const clusterUrl = `cluster0.5f8w9.mongodb.net/${dataBaseName}?retryWrites=true&w=majority`;
const uri =  `mongodb+srv://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`;

const app = express();
// const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const tmp_routers = require("./tmp_routes.js");
const mng_schemas = require("./mongoschemas.js");




//================================ Разрешение CORS ============================================
app.use(function (req, res, next) {
    const origins = [
        'http://localhost',
        'http://localhost:3000',
        'http://localhost:5000'
    ];
    for(let i = 0; i < origins.length; i++){
        const origin = origins[i];
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({
    extended: false,
})


const { MongoClient } = require("mongodb");

const { errorMonitor } = require('events');
const { Console } = require('console');
const { Module } = require('module');
const { Schema } = mng_schemas.mongoose;





//============================== Роуты start ===============================
app.get('/', function (request, response) {
    response.sendFile( 'index.html')
});


app.get('/news999', function (request, response) {
    

    mng_schemas.News.find({}).sort("newsCreated").exec(function(err, docs){
        if(err){
            return console.log(err);
        }
        //console.log(docs);
        response.send(docs);
    })
})

app.get('/products', function (request, response) {
    // отбирает из базы карточки продуктов одного типа 
    // переданного через параметр строки URL request.query.data
    //console.log(request.query.data);
    const strToObj = JSON.parse(request.query.data); //приводим строку параметров к объекту
    //console.log(`strToObj===${strToObj}`);
    mng_schemas.ProductCards.find({productType : strToObj._id/* request.query.data */})
        .sort("productType")
        .populate('productType')
        .populate('productSubType')
        .exec(function(err, docs){
        if(err){
            return console.log(err);
        }
        //console.log(docs);
        response.send(docs);
    })
})


app.get('/productslist', function (request, response) {
    // console.log("============",request);
    mng_schemas.productType.find({})
        .sort("productType")
        //.populate('productType')
        .exec(function(err, docs){
        if(err){
            return console.log(err);
        }
        //console.log(docs);
        response.send(docs);
    })
})

/* эта функция просто создает N карточек типов продуктов..... */
app.get("/--", function(req, res)  {
    tmp_routers.get2minus(mng_schemas.productType, res);
});

/* эта функция просто создает N карточек продуктов..... */
app.get("/createCardProduct", function(req, res)  {
    tmp_routers.createCardProduct(mng_schemas.ProductCards, res);
});
/* эта функция просто создает N карточек продуктов..... */

/* эта функция просто создает N карточек подтипов продуктов..... */
app.get("/createSubType", function(req, res)  {
    tmp_routers.getSubTypeProductsAdd(mng_schemas.productSubType, res);
});
/* эта функция просто создает N карточек продуктов..... */






app.get("/addnews", function(req, res)  {
    console.log('идем создавать новости')
    
    tmp_routers.get2news(mng_schemas.News, res);

});



 
app.get('*', function (req, res) {
        //app.use('/', express.static(path.join(__dirname, 'client', 'build')));
        if(req.params[0].includes('/images/')){
            console.log(`Запросили картинку ${req.params[0]}`);
            
            console.log(`Отдаем файл ${__dirname}/client/src/${req.params[0]}`);
            res.sendFile(`${__dirname}/client/src/${req.params[0]}`);
        }
        else{

            //res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
        };
}); 
//============================== Роуты end ===============================





if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
    

    app.get('*', (req, res) => {
     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
        
    })
}




const PORT = 5000




async function run() {
    console.log("=======================================================");
    console.log("=========     Server starting     =====================");
    console.log("=======================================================");
    console.log("Цепляемся к базе")  ;
    try {
        await mng_schemas.mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },function (err) {
            if (err){
                console.log('Bad connected to mongoose');
                console.log('uri==',uri);
                console.log('err==', err);
                throw err;
            }
            console.log('Successfully connected to mongoose');
        });
        console.log("Connected successfully to server");
        app.listen(PORT, () => console.log(`App has been running on port ${PORT}`))
        
    } catch (e) {
        console.log('Server Error:', e.message)
        process.exit(1)
    }
}



run().catch(console.dir);



 //module.exports.mongoose = mongoose;


 // module.exports.productType = productType;
 // module.exports.ProductCards = ProductCards;
 // module.exports.News = News;



