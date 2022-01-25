


<template>
    <section class=" mainProductSection" > 
      
            <div class="row " style="margin:0">
                <div class="col-1"></div>
                <div class="col-10  titleProducts myShadow">
                    {{mess}}
                </div>      

            </div>       
            <div class="row " style="margin:0">
                <div class="col-1"></div>
                <div class="col-10 productCards myShadow" style="overflow-y:scroll;">
                    <div class="row" v-cloak>
                        <product_card class="col-2" v-for="Item in productsData" :key="Item.id" :Item="Item" style="max-height: 100%;  text-overflow: ellipsis;"> 
                            

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
    props:[],
    components:{
        
    },
    data: function () {
        return {
        mess: "Здесь будет инфа о продукте!!!",
        productsData: []
        }
    },
    beforeCreate: function () {
        this.$options.components.product_card = require('@/components/section_products/product_card').default;
  
       
    },
    methods: {

        getProductsPromise(productType) {
            fetch("/products?"+productType) //,productType
                .then(response => response.json())
                .then(data => this.productsData = data)
        }

    },
    mounted(){
        this.getProductsPromise("0000000001");
    }
    
}
</script>

<style scoped>
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

 
/* ========= */


/* Не используйте шрифты с засечками в инфографике;
Достаточно универсальный шрифт — Montserrat, пользуйтесь им;
Если нужно уместить в одну строку больше текста, попробуйте шрифт Roboto Condensed — он на 25% уже Монтсеррата, но выглядит чуть менее современно;
Для акцентов используйте жирное начертание;
Для коротких фраз используйте заглавные буквы. */
</style>