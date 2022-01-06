<template>

  <div id="app">


    <section_promo>  </section_promo>



<!-- 
=============================
 bootstrap example
=============================
     -->
 <!--     
  <b-card
    title="Card Title"
    sub-title="Card Subtitle"
    style="max-width: 20rem;"    >

    <b-tabs>
      <b-tab title="Tab 1">
        <b-card-text>Tab 1 Contents</b-card-text>
      </b-tab>
      <b-tab title="Tab 2">
        <b-card-text>Tab 2 Contents</b-card-text>
        <b-button
          size="md"
          variant="primary"      >
            Button
        </b-button>
      </b-tab>
      <b-tab title="Tab 3" disabled>
        <b-card-text>Tab 3 Contents</b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>

 -->


  </div>





</template>

<script>
  import section_promo from '@/components/promo/section_promo';
 




export default {
  name: 'App',

  components: {
    
    section_promo
    
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
