<template>
      
    <transition name="fade">
        <div class="myModalBackground"  >
                <div class="myModalNews newsField" >
                    <div class="row " >
                        <div v-on:click="closeModal()"  style="float: left"> 
X                         
                        </div> 
                       
                    </div>
                    <div class="row" style="margin:0">
                        <div class="col ">
                        
                            {{this.$store.state.tmpObj.newsBody}}
                            {{this.$store.state.tmpObj.newsBody}}
                            {{this.$store.state.tmpObj.newsBody}}
                            {{this.$store.state.tmpObj.newsBody}}

                        </div>
                        
                    </div>
                    

                </div>

        </div>
    </transition>    
</template>


<script>


    export default {
        name: 'fullscreennews',
        componens:{
            news_card: () => import('@/components/promo/news_card.vue')
            
        },
        props:{itemNews: Object},
        data: function( ){
        
            return{
                
                cardData: this.itemNews

            }
        },
        created(){
            

        },
        filters: {
            truncate: function (text, length, suffix) {
                if (text.length > length) {
                    return text.substring(0, length) + suffix;
                } else {
                    return text;
                }
            },
        },
        computed:{
         

        },
        methods: {
            closeModal() {
                this.$store.commit('fullNewsHide');                
            },
            
        },
        mounted() {
            
            
        }
        
        
    }

</script>


<style scoped>

    .myModalBackground{
        position: fixed;
        height: 100%;
        width: 100%;
        top:0;
        left:0;       
        
        background-color: rgba(210, 230, 210, 0.8); 
        z-index: 999999;
        

        
        /* top: 50%;   *//* position the top  edge of the element at the middle of the parent */
        /* left: 50%;  *//* position the left edge of the element at the middle of the parent */

        /* transform: translate(-50%, -50%); */ /* This is a shorthand of translateX(-50%) and translateY(-50%) */
                                             
  
    }

    .myModalNews{
        position: fixed;
        
        
        background-color: rgba(50, 112, 50, 0.4); 

        
        top: 50%;   /* position the top  edge of the element at the middle of the parent */
        left: 50%;  /* position the left edge of the element at the middle of the parent */

        transform: translate(-50%, -50%); /* This is a shorthand of translateX(-50%) and translateY(-50%) */
         
        
        border: 2px solid  white;
        border-radius: 1em;
        -webkit-box-shadow: 10px 10px 10px 0px rgba(14, 49, 75, 0.4);
        -moz-box-shadow: 10px 10px 10px 0px rgba(14, 49, 75, 0.4);
        box-shadow: 10px 10px 10px 0px rgba(14, 49, 75, 0.4);
  
    }

/* styles for transitions */
    .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
    }
/* styles for transitions */   

.newsField{
    color: darkred; 


}

</style>
