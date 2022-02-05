

<template>
    <div class="cardMainStyle myCardShadow ">
        <div class="productPic" >
           <img :src="itemImage" alt="selectedItem" > <!-- связать alt (:alt=) с описателем -->
            <!-- <img src="../../assets/images/coffee/pic2.jpg" > -->
            

        </div>
        <p>{{Item.productName}}</p>
        <p>{{Item.productType.productName}}</p>
        

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
    methods:{

    },
  computed: {
    itemImage(picPath, picName) {
        /* 
      if (!this.selectedImage) {
        return
      } */
      //const fileName = `../../assets/images/coffee/pic2.jpg` //${this.Item.pic}
      const fileName = `../../assets/images/${this.Item.productType.productPicPath}/${this.Item.pic}.jpg` //${this.Item.pic}
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
        border-radius: 5%;
        max-width: 100%;
        height: 50%;
        margin: auto;
        width: max-content;
        /* object-position: 50% 50%; */
        /* border: 8px double #FF0000;
        border-top: 4px dotted #FDD201; */

    }

    .productPic img {
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

/* Не используйте шрифты с засечками в инфографике;
Достаточно универсальный шрифт — Montserrat, пользуйтесь им;
Если нужно уместить в одну строку больше текста, попробуйте шрифт Roboto Condensed — он на 25% уже Монтсеррата, но выглядит чуть менее современно;
Для акцентов используйте жирное начертание;
Для коротких фраз используйте заглавные буквы. */

</style>