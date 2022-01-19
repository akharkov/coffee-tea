




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


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var tmp_routers = require("./tmp_routes.js");

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

//include("/js/block_mongo.js");
const { MongoClient } = require("mongodb");
 mongoose = require('mongoose'); //убрал локализующее объявление CONST
const { errorMonitor } = require('events');
const { Console } = require('console');
const { Schema } = mongoose;





//============================== Роуты start ===============================
app.get('/', function (request, response) {
    response.sendFile( 'index.html')
})

app.get('/news999', function (request, response) {
    News.find({}).sort("newsCreated").exec(function(err, docs){
        if(err){
            return console.log(err);
        }
        console.log(docs);
        response.send(docs);
    })
})


app.get('/products', function (request, response) {
    ProductCards.find({}).sort("productType").exec(function(err, docs){
        if(err){
            return console.log(err);
        }
        console.log(docs);
        response.send(docs);
    })
})

app.get("/--", function(req, res)  {
    tmp_routers.get2minus(ProductCards, res);
});

/* эта функция просто создает N карточек продуктов..... */
app.get("/----", function(req, res)  {
    tmp_routers.get2plus(ProductCards, res);
});
/* эта функция просто создает N карточек продуктов..... */

app.get("/addnews", function(req, res)  {
    tmp_routers.get2news(News, res);

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
    console.log("Цепляемся к базе")  ;
    try {
        await mongoose.connect(uri,{
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


const schemaProductType = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        productType: String,  //код типа продукта
        productName: String,
        productTypeEnable: Boolean,
        productTypeDateCreated: {
            type: Date,
            default: Date.now}
    },
    {
        writeConcern: {
            w: 'majority',
            j: true,
            wtimeout: 1000
        }
    }  // этот объект исключил ошибку MongoWriteConcernError: No write concern mode named 'majority/' found in replica set configuration at MessageStream.messageHandler


);

const schemaProductCard = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        productType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'productType'
        },  //код типа продукта из справочника
        productName: String, //название продукта
        productProp: String,  // свойства продукта
        pic: String,  //ссылка на файл изображения
        productCost: Number, //цена
        productEnable: Boolean,
        productPromo: Boolean,
        productDateCreated: {
            type: Date,
            default: Date.now}
    },
    {
        writeConcern: {
            w: 'majority',
            j: true,
            wtimeout: 1000
        }
    }  // этот объект исключил ошибку MongoWriteConcernError: No write concern mode named 'majority/' found in replica set configuration at MessageStream.messageHandler


);

const schemaNews = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        newsTitle: String,  //код типа продукта
        newsBody: String,
        newsEnable: Boolean,
        newsDateBegin: Date,
        newsDateEnd: Date,
        newsCreated: {
            type: Date,
            default: Date.now}
    },
    {
        writeConcern: {
            w: 'majority',
            j: true,
            wtimeout: 1000
        }
    }  // этот объект исключил ошибку MongoWriteConcernError: No write concern mode named 'majority/' found in replica set configuration at MessageStream.messageHandler


);



//убрал локализующее объявление CONST
 productType = mongoose.model('productType', schemaProductType);
 ProductCards = mongoose.model('productCards', schemaProductCard);
 News = mongoose.model('News', schemaNews);



























