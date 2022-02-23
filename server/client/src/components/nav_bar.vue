<template>

<div class="container">

  <nav class="navbar navbar-expand-lg "> <!-- navbar-light bg-light -->
    <a class="navbar-brand" href="#">
      <img src="@/img/logo/MainLogo.png" width="50" height="50" alt="Вкусно-Чайно">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto myNavItem">
            <li class="nav-item active " 
                v-for="menuItem in this.$store.state.navDataObj" 
                :key="menuItem._id">

                 <a class="nav-link" :href="menuItem.refLink"> <!-- productName -->
                  {{menuItem.productName}} <span class="sr-only">(текущая)</span>
                 </a>
              
            </li>
            <li class="nav-item active" >
                <a class="nav-link" href="#"> <!-- productName -->
                  Опт <span class="sr-only">(текущая)</span>
                </a>
            </li>
      

      </ul>



    </div>
  </nav>

</div>
</template>


<script>

export default {
  name: 'nav_bar',
    props:{Item: Object},
    data: function( ){
    
        return{
           
            navBarData:{
              navStructure:{}                
                

            }

        }
    },
    created(){

    },
    filters: {
        
    },
    computed:{
        

    },
    methods: {
        
    },
    mounted() {
        
        
    }
    
    
}

</script>

<style scoped>
  .myNavItem{
  font-family: 'Montserrat', sans-serif;

        font-size: 30px; 
        font-weight: bold;
        font-style: italic;
        font-stretch:expanded;
        letter-spacing:0.2em;


        text-shadow: 1px 1px 0 #3c50c2, 2px 2px 0 #4e4a4a;
         /* text-align:center; */

  }
    
 

        

</style>