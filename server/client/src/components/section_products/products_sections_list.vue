<template>

<!-- productsTypeList -->
    <div>
        <section_products v-for="Item in productsTypeList" :key="Item.id" :propsItem="Item">  </section_products>    
    </div>
</template>

<script>
export default {
    name:"products_sections_list",
    props:[],
    components:{
        
    },
    data: function () {
        return {
        mess: "",
        productsTypeList: []
        }
    },
    beforeCreate: function () {
        
        this.$options.components.section_products = require('@/components/section_products/section_products').default;
        this.$options.components.product_card = require('@/components/section_products/product_card').default;
  
       
    },
    methods: {

        getProductsListPromise(productListParam) {
            fetch("/productslist?"+productListParam) //,productType
                .then(response => response.json())
                .then(data => this.productsTypeList = data) // формируем список типов продуктов
                .then(data=>this.$store.commit('navModify',this.productsTypeList)) // передаем список типов продуктов в store (vueX) для формирования меню
        }
    },
    mounted(){
        this.getProductsListPromise("0000000001");
        console.log(`+++ Props: ${this.$props}`);
    }
    
}
</script>

<style>

</style>