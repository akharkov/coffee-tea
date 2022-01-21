



// -- начало -- эта функция просто создает N карточек продуктов.....  техническая функция вне проекта
async function get2plus(collect, res){

    let docCount=0;

    const prodTypes = await productType.find();
    console.log('prodTypes=',prodTypes); //[0]._id

    /* 
    prodTypes.forEach(item => {
      console.log('prodTypes===',item._id);
    }); 
    
    */


    await ProductCards.find()
        .exec(function(err, Product_Cards) {

            /* console.log('Product_Cards==',Product_Cards);
            console.log('Product_Cards.length==',Product_Cards.length  );

            console.log('ProductCards.countDocuments==',ProductCards.countDocuments() );
            console.log('Product_Cards.countDocuments==',Product_Cards.proto ); */
//
            //ProductCards.estimatedDocumentCount(function (err, count) {

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
  
                    for (let i=1;i<51;i++) {

                        (picNo<6) ? picNo++ : picNo=0;
                        (prodTypeNum<1) ? prodTypeNum++ : prodTypeNum=0;
 


// id = ObjectId('619ea5069365ba31cc27cfe0');
// id = mongoose.Types.ObjectId('619ea5069365ba31cc27cfe0');  
// console.log('mongoose.Types.ObjectId(  ===  ',id);




                        prodCard = new ProductCards( {
                            _id: new mongoose.Types.ObjectId(),
                            productType: prodTypes[prodTypeNum]._id
                            , //код типа продукта из справочника
                            productName: 'Продукт № '+i, //название продукта
                            productProp: 'String'+i,  // свойства продукта
                            pic: 'Pic'+ picNo++, //()=>{(picNo<6) ? picNo++ : picNo=0; return 'Pic'+picNo; },//'Pic'+ picNo++ , //ссылка на файл изображения
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


                ProductCards.find({ productName: /кофе/i  }).limit(10)
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




};
// -- конец -- эта функция просто создает N карточек продуктов.....  техническая функция вне проекта

// -- начало -- эта функция просто создает N карточек типов продуктов.....  техническая функция вне проекта
async function get2minus(collect, res){
    let docCount;
    await ProductCards.find({}).exec(function(err, Product_Cards) {
        console.log(Product_Cards);
        Product_Cards.estimatedDocumentCount(function (err, count) {

            if (err){
                console.log(err)
            }else{

                docCount = count;
                console.log("Estimated Count docCount= :", docCount);

                if (docCount===0) {

                    let prodType = new productType( {
                        _id: new mongoose.Types.ObjectId(),
                        productType: '0000000001',
                        productName: 'Кофе',
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


                /*
                               Book.find({
                                 title: /mvc/i
                             }).sort('-created')
                             .limit(5)
                             .exec(function(err, books) {
                                 if (err) throw err;

                                 console.log(books);
                             }); */
                //.create
                /*
                                      _id: new mongoose.Types.ObjectId(),
                                      coffeeName: `Какой-то кофе № ${docCount}`,
                                      coffeeRegion: new mongoose.Types.ObjectId(),
                                      detail: `Много много интересного`,
                                      pic: "Картинка",
                                      created:   new Date()
                   */

                ProductCards.find({
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
    await News.find({}).exec(function(err, News_Cards) {
        console.log(collect);
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
                            _id: new mongoose.Types.ObjectId(),
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



                News.find({
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





module.exports.get2plus = get2plus;
module.exports.get2minus = get2minus;
module.exports.get2news = get2news
