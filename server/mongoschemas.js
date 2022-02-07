"use strict";

const mongoose = require('mongoose');

const srv = require('./server.js'); 
const tmp_routers = require("./tmp_routes.js");


//======================================================
//======= Схема документов типов продуктов =============
//======================================================
const schemaProductType = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productType: String,  //код типа продукта
    productName: String,
    productSection: Boolean, //true создает секцию на сайте
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


//======================================================
//======= Схема документов подтипов продуктов ==========
//======================================================
const schemaProductSubType = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productType'
    },  //код типа продукта из справочника
    productSubType: String,  //код типа продукта
    productSubTypeName: String,
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


//======================================================
//======= Схема документов карточек продуктов ==========
//======================================================
const schemaProductCard = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productType'
    },  //код типа продукта из справочника
    productSubType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productSubType'
    },  //код подТипа продукта из справочника
    productName: String, //название продукта
    productProp: String,  // свойства продукта
    pic: String,  //ссылка на файл изображения
    productCost: Number, //цена
    productVoteUp: Number, //число голосов ЗА
    productVoteDown: Number, //число голосов ПРОТИВ
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





const  productType = mongoose.model('productType', schemaProductType);
const  productSubType = mongoose.model('productSubType', schemaProductSubType);
const  ProductCards = mongoose.model('productCards', schemaProductCard);
const  News = mongoose.model('News', schemaNews);


module.exports.mongoose = mongoose;
module.exports.schemaProductType = schemaProductType;
module.exports.schemaProductSubType = schemaProductSubType;
module.exports.schemaProductCard = schemaProductCard;
module.exports.schemaNews = schemaNews;

module.exports.productType = productType;
module.exports.productSubType = productSubType;
module.exports.ProductCards = ProductCards;
module.exports.News = News;
