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
      <ul class="navbar-nav mr-auto">
            <li class="nav-item active" 
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

<!-- 
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Главная <span class="sr-only">(текущая)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ссылка</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Выпадающий список
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Действие</a>
            <a class="dropdown-item" href="#">Другое действие</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Что-то еще здесь</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Отключенный</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Поиск">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
      </form>
    </div> -->
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
    
 

        

</style>