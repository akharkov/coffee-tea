


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
                <div class="col-10 productCards myShadow">
                    <product_card class="col-2"> </product_card>
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
        
        height: 500px;

        background: rgba(241, 237, 237, 0.5);
        border-radius: 10px;
    }

    .myShadow{

        -webkit-box-shadow: 18px 20px 8px 0px rgba(34, 60, 80, 0.3);
        -moz-box-shadow: 18px 20px 8px 0px rgba(34, 60, 80, 0.3);
        box-shadow: 18px 20px 8px 0px rgba(34, 60, 80, 0.3);
    }


/* Не используйте шрифты с засечками в инфографике;
Достаточно универсальный шрифт — Montserrat, пользуйтесь им;
Если нужно уместить в одну строку больше текста, попробуйте шрифт Roboto Condensed — он на 25% уже Монтсеррата, но выглядит чуть менее современно;
Для акцентов используйте жирное начертание;
Для коротких фраз используйте заглавные буквы. */
</style>