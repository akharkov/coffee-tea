<template>

  <div id="app">


    <section_promo>  </section_promo>
    <!-- <section_products >  </section_products> -->
    <products_sections_list>  </products_sections_list>


  </div>





</template>

<script>
  import section_promo from '@/components/promo/section_promo';
  import section_products from '@/components/section_products/products_sections_list';
  // import section_products from '@/components/section_products/section_products';




export default {
  name: 'App',

  components: {
    
    section_promo,
    //section_products,
    
    
  },
  beforeCreate: function () {
        this.$options.components.products_sections_list = require('@/components/section_products/products_sections_list').default;
  
       
    },
}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
