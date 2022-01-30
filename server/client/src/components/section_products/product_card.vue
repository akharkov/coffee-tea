

<template>
    <div class="cardMainStyle myCardShadow ">
        <div class="productPic">
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
        
        height: 200px;
        
        background: rgba(241, 237, 237, 0.8);
        border-radius: 10px;

    }
    .myCardShadow{

        -webkit-box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.3);
        -moz-box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.3);
        box-shadow: 10px 10px 8px 0px rgba(34, 60, 80, 0.3);
    }

    .productPic{

    }

/* Не используйте шрифты с засечками в инфографике;
Достаточно универсальный шрифт — Montserrat, пользуйтесь им;
Если нужно уместить в одну строку больше текста, попробуйте шрифт Roboto Condensed — он на 25% уже Монтсеррата, но выглядит чуть менее современно;
Для акцентов используйте жирное начертание;
Для коротких фраз используйте заглавные буквы. */

</style>