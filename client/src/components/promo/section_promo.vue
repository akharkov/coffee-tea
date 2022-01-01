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



            <div id="newsFeed" class="col col-2 d-none d-lg-block news_feed" style="max-height: 100%; overflow:hidden; text-overflow: clip;" >
 <!--                
                <div v-for="newsItem in news" :key="newsItem.id " style="max-height: 30%; overflow:hidden; text-overflow: ellipsis;">
                    <h4>{{newsItem.newsTitle}}</h4>
                    <p></p>
                    <p>{{newsItem.newsBody }}</p>
                </div> 
-->

                <news_card v-for="Item in news" :key="Item.id" :Item="Item" style="max-height: 100%; overflow:hidden; text-overflow: ellipsis;"> 


                </news_card>
            </div>   
            
            
        </div>


        <div id="footer" class="row  " style="margin:0  height:5%">
            <!-- <img src="../../img/logo/MainLogo.png" alt="" class="logo_img"> -->
           
        </div> 
      
        
    
    </section>    
</template>


<script>
    import news_card from '@/components/promo/news_card';
    import nav_bar from '@/components/nav_bar'


    export default {
    name: 'sectionPromo',
    components: {
        news_card,
        nav_bar

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
    border: 1px solid rgba(6, 94, 13, 0.5);
    background-color: rgba(193, 199, 193, 0.5);
     /* background: url("../img/sectionback.png") no-repeat center top; */
    /* max-width: 800px; */
    /* margin: auto; */
    /* position: sticky; */
    
    /* top: 10px;  */
  
    

  }
</style>>

