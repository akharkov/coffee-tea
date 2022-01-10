<template>
    <div  class="newsCard" style="overflow:hidden" v-on:click="newsShow(Item, $event)">
        
         {{Item.newsTitle}} 
        <p > {{Item.newsBody}} </p> 
        

<!-- 
       <fullscreennews v-bind:itemNews="Item" class="myModalBackground" v-show="isModalVisible"  @close="closeModal" v-on:click="closeModal()" >
           
       </fullscreennews> 
 -->

<!-- <div class="myModalBackground" v-show="isModalVisible"  @close="closeModal" v-on:click="closeModal()">

    <div class="myModalNews" v-on:click="closeModal()">
        <div class="row" > 
            X
        </div>
        <div class="row">
            <div class="col">
                {{Item.newsBody}}
            </div>
            
        </div>
        

    </div>

</div>
 -->
    </div>
    
    
  
 
</template>

<script>

    export default {
        name: 'news_card',
        componens:{
            
        },
        props:{Item: Object},
        data: function( ){
        
            return{
                cardStyle:{},
                clickCount:0,
                isModalVisible: false, /* управление компонентом модального окна */
                isModalShow: false,
                cardData:{
                }

            }
        },
        /* 
        beforeCreate: function () {
            this.$options.components.fullscreennews = require('@/components/promo/fullscreennews.vue').default;
            //this.store.commit('increment');
        }, */
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
            card_Style(){
            this.matchHeight();
            return this.cardStyle;
            }  //сюда положим вычисляемые стили карты продукта

        },
        methods: {
            showModal() {
                this.$store.commit('tmpObjAssign',this.Item);
                this.$store.commit('fullNewsVisible');
            },
            /* closeModal() {
                this.$store.commit('fullNewsHide');                
            }, */
            newsShow: function (Item, event){

                //alert(Item.newsBody);
                this.showModal();
    /* 
                // `this` внутри методов указывает на экземпляр Vue
                    alert('Привет, ' + this.name + '!'+event)
                // `event` — нативное событие DOM
                    if (event) {
                        alert(event.target.tagName)
                        

                    }
    */       
            }
        },
        mounted() {
            
            
        }
        
        
    }

</script>

<style scoped>
    .newsCard{
        height: 30%;
        background-color: rgba(190, 192, 134, 0.555);
color: rgb(232, 243, 243);
        border-radius: 5px;
        margin-top: 5%;
        margin-left: 2%;
        margin-right: 2%;
        padding-top: 1%;
/* 
        -webkit-box-shadow: 1px 1px 10px 15px rgba(20, 28, 34, 0.22) inset;
        -moz-box-shadow: 1px 1px 10px 15px rgba(20, 28, 34, 0.22) inset;
        box-shadow: 1px 1px 10px 15px rgba(29, 30, 31, 0.22) inset; */

    }





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