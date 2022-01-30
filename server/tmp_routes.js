"use strict";
//import {mongoose, productType, ProductCards, News} from './server.js';
 /* 
const mongoose = require('./server.js').mongoose;
const productType = require('./server.js').productType;
const ProductCards = require('./server.js').ProductCards;
const News = require('./server.js').News; 
 */

// const productType = require('./server.js').productType;
//const News = require('./server.js').News; 

const srv = require('./server'); 
const mng_schemas = require("./mongoschemas.js");


// -- начало -- эта функция просто создает N карточек продуктов.....  техническая функция вне проекта
async function createCardProduct(collect, res){

    let docCount=0;
    let typeDocCount=0;


    //const prodTypes = await productType.find();
    //console.log('prodTypes=',prodTypes); //[0]._id

    await mng_schemas.productType.find({}).exec(function(err, product_Type) {
        //console.log(mng_schemas.product_Type);
        mng_schemas.productType.estimatedDocumentCount(function (err, count) {

            if (err){
                console.log(err)
            }else{

                typeDocCount = count;
                            
                /* await */ mng_schemas.ProductCards.find({})
                .exec(function(err, Product_Cards) {

                    if (err){
                        console.log(err)
                    }else{

                        docCount = 0; //count;
                        
                        console.log("Estimated Count docCount= :", docCount);

                        if (docCount===0) {
                            let prodCard;

                            var id ;
                            let prodTypeNum=0;
                            let picNo=0;
/* 
                            console.log("===========================================")
                            console.log("product_Type===",product_Type)
                            console.log("===========================================",typeDocCount)
 */
                            for (let i=1;i<51;i++) {

                                (picNo<6) ? picNo++ : picNo=0;
                                (prodTypeNum<typeDocCount-1) ? prodTypeNum++ : prodTypeNum=0;



            // id = ObjectId('619ea5069365ba31cc27cfe0');
            // id = mongoose.Types.ObjectId('619ea5069365ba31cc27cfe0');  
            // console.log('mongoose.Types.ObjectId(  ===  ',id);



                                prodCard = new mng_schemas.ProductCards( {
                                    _id: new mng_schemas.mongoose.Types.ObjectId(),
                                    productType: product_Type[prodTypeNum]._id
                                    , //код типа продукта из справочника
                                    productName: 'Продукт № '+i, //название продукта
                                    productProp: 'String'+i,  // свойства продукта
                                    pic: 'pic'+ picNo++, //()=>{(picNo<6) ? picNo++ : picNo=0; return 'Pic'+picNo; },//'Pic'+ picNo++ , //ссылка на файл изображения
                                    productCost: 10*i, //цена
                                    productEnable: 1,
                                    productPromo: 1

                                });

                                


                                prodCard.save()
                                    .then(function(doc){
                                        console.log("Сохранен объект", doc);

                                    })
                                    .catch(function (err){
                                        console.log('Ошибка!!!!!!!!!!!!!!!!!!!!!!!!!!   ',err);

                                    });
                            }
                        }


                        mng_schemas.ProductCards.find({ productName: /кофе/i  }).limit(10)
                            .exec( function (err, small) {
                                if (err){
                                    console.log('Erroo = ',err);
                                    return err;}
                                else{
                                    res.status(200).send(small); //json
                                    console.log("Данные отправленны",small);
                                    //ProductCards.collection.drop();
                                }
                            });


                    }
                    //});

                    //console.log(ProductCardss);
                });
            }
        })
    });





};
// -- конец -- эта функция просто создает N карточек продуктов.....  техническая функция вне проекта

// -- начало -- эта функция просто создает N карточек типов продуктов.....  техническая функция вне проекта
async function get2minus(collect, res){
    let docCount;
    let cardCount ; cardCount=5;
    
    await mng_schemas.productType.find({}).exec(function(err, product_Type) {
        //console.log(mng_schemas.product_Type);
        mng_schemas.productType.estimatedDocumentCount(function (err, count) {

            if (err){
                console.log(err)
            }else{

                docCount = count;
                console.log("Estimated Count docCount= :", docCount);

                if (docCount===0) {
                    for(let j=1;j<=cardCount;j++ ){


                        let prodType = new mng_schemas.productType( {
                            _id: new mng_schemas.mongoose.Types.ObjectId(),
                            productType: '000000000'+j,
                            productName: 'Кофе',
                            productSection: true, 
                            productTypeEnable: 0

                        });

                        prodType.save()
                            .then(function(doc){
                                console.log("Сохранен объект", doc);

                            })
                            .catch(function (err){
                                console.log('Ошибка!!!!!!!!!!!!!!!!!!!!!!!!!!   ',err);

                            });
                    }

                }

                productType.find({
                    productName: /кофе/i
                }).limit(10)
                    .exec( function (err, small) {
                        if (err){
                            console.log('Erroo = ',err);
                            return err;}
                        else{


                            res.status(200).send(small); //json
                            console.log("Данные отправленны",small);
                            //ProductCards.collection.drop();

                        }
                    });


            }
        });
        //console.log(ProductCardss);
    });
};
// -- конец -- эта функция просто создает N карточек типов продуктов.....  техническая функция вне проекта


// -- начало -- эта функция просто создает N карточек новостей.....  техническая функция вне проекта
async function get2news(collect, res){
    let docCount;

    //console.log("2) News======= ",mng_schemas.News);
    await mng_schemas.News.find({}).exec(function(err, News_Cards) {
        //console.log(collect);
        collect.estimatedDocumentCount(function (err, count) {

            if (err){
                console.log(err)
            }else{

                docCount = count;
                console.log("Estimated Count docCount News= :", docCount);
const fillText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."



                if (docCount===0) {

                    let newsCard;
                    for (i=1;i<11;i++) {
                        newsCard = new collect( {
                            _id: new mng_schemas.mongoose.Types.ObjectId(),
                            newsTitle: "Новость № "+i,  //код типа продукта
                            newsBody: i+") Много интересного "+fillText,
                            newsEnable: 1,
                            newsDateBegin: new Date()
                            // newsDateEnd: Date

                        });
                        newsCard.save()
                            .then(function(doc){
                                console.log("Сохранен объект", doc);

                            })
                            .catch(function (err){
                                console.log('Ошибка!!!!!!!!!!!!!!!!!!!!!!!!!!   ',err);

                            });
                    }
                }



                mng_schemas.News.find({
                    newsTitle: /кофе/i
                }).limit(10)
                    .exec( function (err, small) {
                        if (err){
                            console.log('Erroo = ',err);
                            return err;}
                        else{


                            res.status(200).send(small); //json
                            console.log("Данные отправленны",small);
                            //ProductCards.collection.drop();

                        }
                    });


            }
        });
        //console.log(ProductCardss);
    });
};
// -- конец -- эта функция просто создает N карточек типов продуктов.....  техническая функция вне проекта





module.exports.createCardProduct = createCardProduct;
module.exports.get2minus = get2minus;
module.exports.get2news = get2news
 
