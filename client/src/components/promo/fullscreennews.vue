<template>
        
   <!--  <div class="myModalBackground" v-show="isModalVisible"  @close="closeModal" v-on:click="closeModal()"> -->
<div class="myModalBackground"  >
        <div class="myModalNews" v-on:click="closeModal()"><!--  v-on:click="closeModal()" -->
            <div class="row" > 
                X
            </div>
            <div class="row">
                <div class="col">
                   
                    {{this.$store.state.tmpObj.newsBody}}
                </div>
                
            </div>
            

        </div>

    </div>
</template>


<script>
    

    export default {
        name: 'fullscreennews',
        componens:{
            newscard: () => import('@/components/promo/news_card.vue')
            
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

        
        /* top: 50%;   *//* position the top  edge of the element at the middle of the parent */
        /* left: 50%;  *//* position the left edge of the element at the middle of the parent */

        /* transform: translate(-50%, -50%); */ /* This is a shorthand of translateX(-50%) and translateY(-50%) */
                                             
  
    }

    .myModalNews{
        position: fixed;
        
        
        background-color: rgba(27, 29, 27, 0.4);

        
        top: 50%;   /* position the top  edge of the element at the middle of the parent */
        left: 50%;  /* position the left edge of the element at the middle of the parent */

        transform: translate(-50%, -50%); /* This is a shorthand of translateX(-50%) and translateY(-50%) */
        color: darkred;                                         
  
    }
        
</style>
