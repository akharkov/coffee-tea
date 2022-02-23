

<template>
    <div class="cardMainStyle myCardShadow ">
        <div class="productPic" >
           <img :src="itemImage" alt="_А где картинка? :)_" > <!-- связать alt (:alt=) с описателем -->
            <!-- <img src="../../assets/images/coffee/pic2.jpg" > -->
            

        </div>

        <div class="cardBody">
            <div class="cardProductTitle">
                {{Item.productName}}
                

            </div>
            <div class="cardProductSubType">
                {{Item.productSubType.productSubTypeName}}
            </div>
       
            {{Item.productProp | truncate(80,"...")}}
        <!-- <p>{{Item.productType.productName}}</p> -->

        </div>

        <div class="row cardFooter">

<!--             <div class="col-1">                
                <img src="../../assets/icons/finger_down.png" alt=""  > 
            </div>
            <div class="col-9">2</div>
            <div class="col-1 vote_up">                
                <img src="../../assets/icons/finger_up.png" alt=""  > 
            </div> -->

        </div>

    </div>
    
</template>



<script>
    
export default {
    name:"product_card",
    props:{Item: Object},
    data:function () {
        return {
        mess: "Здесь будет инфа о продукте!!!",
        productsCardData: []
        }
    },
    componens:{
            
        },
    filters: {
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    },
    methods:{

    },
  computed: {
    itemImage(picPath, picName) {
        /* 
      if (!this.selectedImage) {
        return
      } */
      //const fileName = `../../assets/images/coffee/pic2.jpg` //${this.Item.pic}
      const fileName = `../../assets/images/${this.Item.productType.productPicPath}/${this.Item.pic}` //${this.Item.pic}
      //this.Item.pic; //.toLowerCase()



      console.log('fileName==',fileName);
      return /* require */(`${fileName}`);
      //return require(`..\\..\\img${this.Item.productType.productPicPath}${fileName}.jpg`);
      //return `${fileName}`;

    }
  }
    
}
</script>

<style scoped>



    .cardMainStyle{
        margin: 10px;
        padding: 5px ;
        
        height: 300px;
        
        background: rgba(241, 237, 237, 0.8);
        border-radius: 10px;

    }
    .myCardShadow{

        -webkit-box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.3);
        -moz-box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.3);
        box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.3);
    }

    .productPic{
        /* background: rgba(253, 253, 253, 0); */
        border-radius: 5%;
        max-width: 100%;
        height: 40%;
        margin: auto;
        padding: 3%;
        width: max-content;
        /* object-position: 50% 50%; */
        /* border: 8px double #FF0000;
        border-top: 4px dotted #FDD201; */

    }

    .productPic img {
        /* background: rgba(253, 253, 253, 0); */
        border-radius: 5%;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: 50% 50%;

        box-shadow: 5px 5px 5px rgba(116, 114, 114, 0.8);


        /* border-radius: 50%; *//* 
-webkit-box-shadow: inset 9px 9px 30px -12px rgba(0,0,0,0.7);
-moz-box-shadow: inset 9px 9px 30px -12px rgba(0,0,0,0.7);
box-shadow: inset 9px 9px 30px -12px rgba(0,0,0,0.7); */
        }

    .cardBody{
        overflow: hidden;
        text-align: justify;
        word-break:break-all;
        hyphens:auto;
        /* font-family: Montserrat ; */
        
    }    
    .cardBody .cardProductTitle {
        color: rgb(144, 107, 245);

     /*   font-family: 'Roboto', sans-serif ; 
        font-family: 'Open Sans', sans-serif;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Oswald', sans-serif; */
        
        font-family: 'Montserrat', sans-serif;

        font-size: 20px; 
        font-weight: bold;
        font-style: italic;
        font-stretch:expanded;
        letter-spacing:0.2em;


        text-shadow: 1px 1px 0 #3c50c2, 2px 2px 0 #4e4a4a;
         text-align:center;

        
    }

.cardBody .cardProductSubType {
        color: rgb(16, 15, 15);
     
        font-family: 'Montserrat', sans-serif;
        font-size: 16px; 
        font-weight: bold;

        /* font-style: italic;
        font-stretch:expanded;
        letter-spacing:0.2em; 
        text-shadow: 1px 1px 0 #3c50c2, 2px 2px 0 #4e4a4a; */

        
    }





    /* .cardBody */ .cardFooter{
        margin: 0;

        position:absolute;
        bottom:0;
        /* width:90%; */
        max-width: 100%;
        height:15%;   /* Высота блока "footer" */
        background:rgba(250, 249, 249, 0.5); 
        
    }


.vote_up{
   
 background-color: rgba(34, 60, 80, 0.3);
 background-image: url('../../assets/icons/finger_up.png') ;
  background-size: contain ;
  background-repeat: no-repeat;

  /* object-fit: cover; */
    /* height: 100%;
    width: 100%; */
} 

/* Не используйте шрифты с засечками в инфографике;
Достаточно универсальный шрифт — Montserrat, пользуйтесь им;
Если нужно уместить в одну строку больше текста, попробуйте шрифт Roboto Condensed — он на 25% уже Монтсеррата, но выглядит чуть менее современно;
Для акцентов используйте жирное начертание;
Для коротких фраз используйте заглавные буквы. */

</style>