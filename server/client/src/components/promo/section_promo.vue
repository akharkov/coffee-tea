<template>


    <section id="secPromo" class=' mainsection ' style="margin:0">
        
        <div id="nav-bar" class="row  " style="margin:0 max-height:10%">
            <!-- <img src="../../img/logo/MainLogo.png" alt="" class="logo_img"> -->
            <nav_bar> </nav_bar>
        </div> 
        
        <div class="row container-fluid " style=" height:85%">
            
            <div class="col col-10 promo">
<!-- 
                <div class=" quotes"> 
                    <h2>Этот мир не так уж плох, пока в нем есть кофе....</h2>
                    
</div> -->
                
            </div>



            <div id="newsFeed" class="col col-2 d-none d-lg-block news_feed" style="max-height: 100%; overflow-y:scroll; text-overflow: clip;" >
 
                <news_card v-for="Item in news" :key="Item.id" :Item="Item" style="max-height: 100%;  text-overflow: ellipsis;"> 
                </news_card>
                 
            </div>   
            
            
        </div>
        

        <div id="footer" class="row  " style="margin:0  height:5%">
         
          <div class="col-3"  >
            <socialkeys> </socialkeys>   
           
          </div> 
           
          <div class="col-8">
          </div>  
          <div class="col-1">
           
          </div> 
        </div> 
      
        
       <fullscreennews v-bind:itemNews="this.$store.state.tmpObj" class="myModalBackground" v-show="this.$store.state.isModalVisibleNews"   > <!-- @close="closeModal" v-on:click="closeModal()" -->
           
       </fullscreennews> 


       <fullscreenproduct v-bind:itemProduct="this.$store.state.tmpProdObj" class="myModalBackground" v-show="this.$store.state.isModalVisibleProduct"   > <!-- @close="closeModal" v-on:click="closeModal()" -->
           
       </fullscreenproduct> 

    
    </section>    
</template>


<script>
    //import fullscreennews from '@/components/promo/fullscreennews.vue'; 
    import news_card from '@/components/promo/news_card';
    import nav_bar from '@/components/nav_bar';
    /* import socialkeys from '@/components/other/socialkeys.vue'; */
    
    export default {
    name: 'sectionPromo',
    components: {
        //fullscreennews,
        news_card,
        nav_bar/* ,
        socialkeys */

    },
    beforeCreate: function () {
            
        this.$options.components.fullscreenproduct = require('@/components/section_products/fullscreenproduct.vue').default;
        this.$options.components.fullscreennews = require('@/components/promo/fullscreennews.vue').default;
        this.$options.components.socialkeys = require('@/components/other/socialkeys.vue').default;
       
    },
    data: function () {
        return {
        mess: "Здесь будет лента новостей!!!S",
        news: []
        }
    },
    methods: {
        // через async await 
        async getNewsAsyncAwait() {
            const res = await fetch('/news999')
            const data = await res.json()
            if (data) {
                this.news = data
            }
        },
        // или через промис
        getNewsPromise() {
            fetch('/news999')
                .then(response => response.json())
                .then(data => this.news = data)
        }
    },
    mounted() {
        // тут запускаем нужную функцию

        this.getNewsAsyncAwait()
        //this.getNewsPromise()
    }
}

</script>





<style scoped>
  .mainsection {
      height: 98vh;
      background: url("../../img/backgrounds/bgpromo3.jpg") no-repeat center top; 
      background-size: cover;
      background-repeat:no-repeat;
      background-position: center center;
      /* background-attachment: fixed; */
    }

  h2 {
    width: 100%;
    height: 100px;
    text-align: center;
    font: bold 40px Lobster, Arial, sans-serif;
    color: #f7f2f2;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
    letter-spacing: 15px;
    word-spacing: 15px;
  }

  h3 {
    width: 100%;
    height: 25px;
    text-align: center;
    font: bold 40px Lobster, Arial, sans-serif;
    color: #d8d5d5;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
    letter-spacing: 20px;
    word-spacing: 15px;
  }

  h4 {
    width: 100%;
    height: 15px;
    text-align: left;
    font: bold 20px Arial, sans-serif;
    color: #24055e;
    letter-spacing: 10px;
    word-spacing: 5px;
  }


  .mainblock{
    margin: 0;
    /* background: yellow; */
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }


  


.quotes {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 2% auto;
  max-width: 90%;
  height: auto;
  font-weight: bold;
  font-style: italic;
  font-size: 40px;
  text-decoration: none;
  color: white;
  text-align: center;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
}


  .news_feed{
    border: 1px solid rgba(62, 78, 63, 0.2);
    padding: 0;

    

  }

/* ======== */
 #newsFeed::-webkit-scrollbar {
  width: 10px;
  background-color: #44701b25;
}
/* бегунок */
#newsFeed::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #90978e;
}


/* линия скроллера */
#newsFeed::-webkit-scrollbar-track {
 /*  -webkit-box-shadow: inset 0 0 10px rgba(248, 246, 246, 0.1); */
  border-radius: 10px;
  background-color: #0b570b26;
  box-shadow: rgba(245, 246, 246, 0.102);
}

 
/* ========= */




</style>>

