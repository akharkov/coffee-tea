


<template>
    <section :id="propsItem._id" class=" mainProductSection" style="margin:0; overflow-y: hidden" > 
      
            <div class="row " style="margin:0">
                <div class="col-1"></div>
                <div class="col-10  titleProducts myShadow">
                    <h3>{{propsItem.productName}} </h3>
                    <button type="button" class="btn  btn-sm productBtn ">История</button>
                    <button type="button" class="btn  btn-sm productBtn">Рецепты</button>
                    <button type="button" class="btn  btn-sm productBtn">Что-то еще...</button>
                    
                </div>      

            </div>       
            <div class="row " style="margin:0; overflow-y: hidden">
                <div class="col-1"></div>
                <div class="col-10 productCards myShadow" style="overflow-y:scroll;">
                    <div class="row justify-content-around" v-cloak>
                        <product_card class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="Item in productsData" :key="Item.id" :Item="Item" style="max-height: 100%;  text-overflow: ellipsis;"> 
                            

                        </product_card>
                    </div>
                    
                </div>
            </div>       
       
    </section>  


</template>

<script>
    /* import news_card from '@/components/section_products/product_card'; */
export default {
    name:"section_products",
    props:["propsItem"],
    components:{
        
    },
    data: function () {
        return {
        mess: "propsItem._Id",
        productsData: []
        }
    },
    beforeCreate: function () {
        this.$options.components.fullscreenproduct = require('@/components/section_products/fullscreenproduct.vue').default;
        this.$options.components.product_card = require('@/components/section_products/product_card').default;
  
       
    },
    methods: {

        getProductsPromise(productType) {
            //разворачиваем объект в строку параметров
            const objQuery = JSON.stringify(productType); 
            fetch("/products?data="+objQuery/* productType._id */) //,productType
                .then(response => response.json())
                .then(data => this.productsData = data)
        }

    },
    mounted(){
        this.getProductsPromise(this.$props.propsItem);
        //console.log(`===+++ Props: ${this.$props.propsItem}`);
    }
    
}
</script>

<style scoped>

    h3{
        font-family: Lobster;
        color: rgba(10, 37, 190, 0.931);
        text-shadow: 1px 1px 0 #f1e9e9, 2px 2px 0 #4e4a4a;
        height: 45px;
    }


    .mainProductSection{
        
        height: 98vh; 
        background: rgba(241, 237, 237, 0.2);
        border-radius: 20px;
      
        margin: 10px;

        
    }

    .titleProducts{
       
        

        margin: 10px;
        
        height: 100px;
        background: rgba(241, 237, 237, 0.5);
        border-radius: 10px;

    }

    .productCards{
        margin: 10px;
        
        height: 80vh;

        background: rgba(241, 237, 237, 0.5);
        border-radius: 10px;
    }

    .myShadow{

        -webkit-box-shadow: 15px 15px 5px 0px rgba(34, 60, 80, 0.3);
        -moz-box-shadow: 15px 15px 5px 0px rgba(34, 60, 80, 0.3);
        box-shadow: 15px 15px 5px 0px rgba(34, 60, 80, 0.3);
    }

/* ======== */
    .productCards::-webkit-scrollbar {
        width: 10px;
        background-color: #44701b25;
        }
/* бегунок */
.productCards::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #90978e;
}


/* линия скроллера */
.productCards::-webkit-scrollbar-track {
 /*  -webkit-box-shadow: inset 0 0 10px rgba(248, 246, 246, 0.1); */
  border-radius: 10px;
  background-color: #0b570b26;
  box-shadow: rgba(245, 246, 246, 0.102);
}

.productBtn{
  margin: 10px;
  background: rgba(217, 223, 241, 0.87);
  border-radius: 4px;
  box-shadow: 5px 0 5px 0 rgba(173, 168, 168, 0.637);
  color: rgb(93, 107, 231);
  display: inline-block;
  margin: 10px;
  padding: 2px 20px;
  position: relative;
  text-decoration: none !important;
  top: 0px;
  transition: all 0.3s ease-in-out;

}
 
.productBtn span {
  display: inline-block;
  color: rgb(170, 42, 42);
  padding: 10px 20px;
  background: #d3f0a4;
  border-radius: 4px;
  transition: transform .2s ease-in-out;
}
.productBtn:active {
  box-shadow: 0 0 0 0 rgb(134, 170, 168);
  top: 6px;
}
.productBtn:active span {
  transform: translate(0, 6px);
  box-shadow: 0 -5px 0 blue;
  transition: 0.3s;
} 
/* ========= */


/* Не используйте шрифты с засечками в инфографике;
Достаточно универсальный шрифт — Montserrat, пользуйтесь им;
Если нужно уместить в одну строку больше текста, попробуйте шрифт Roboto Condensed — он на 25% уже Монтсеррата, но выглядит чуть менее современно;
Для акцентов используйте жирное начертание;
Для коротких фраз используйте заглавные буквы. */
</style>