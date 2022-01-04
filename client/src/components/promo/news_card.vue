<template>
    <div  class="newsCard" style="overflow:hidden" v-on:click="newsShow(Item, $event)">
        <!-- <p> {{Item.newsTitle}} </p>
        <p > {{Item.newsBody}} </p>   --> 
<!-- 
       <modal v-show="isModalVisible"  @close="closeModal" >
           <div>t   tttt</div>
       </modal> 
 -->

<div class="myModalBackground" v-show="isModalVisible"  @close="closeModal" v-on:click="closeModal()">

    <div class="myModalNews" v-on:click="closeModal()">
        <div class="row" > 
            X
        </div>
        <div>
            {{Item.newsBody}}
        </div>
        

    </div>

</div>

    </div>
    
    
  
 
</template>

<script>
    //import modal from '@/components/other/modal.vue';

    export default {
        name: 'newsCard',
        componens:{
//            modal
            
        },
        props:{Item: Object},
        data: function( ){
        
            return{
                cardStyle:{},
                clickCount:0,
                isModalVisible: false, /* управление компонентом модального окна */
                isModalShow: false,
                cardData:{



                    cardId:"",
                    newsTitle:"",
                    newsBody:"Ну очень интересно "
                        +"Lorem ipsum dolor sit,"
                        +"amet consectetur adipisicing elit."
                        +"Corrupti nemo eaque totam eos,"
                        +"dignissimos sint molestias ullam a"
                        +"consequatur officiis illo nisi quae eum",
                    newsEnable:1, 
                    newsDateBegin:Date.now, 
                    newsDateEnd:Date.now,
                    newsCreated:Date.now
                    
                    

                }

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
            card_Style(){
            this.matchHeight();
            return this.cardStyle;
            }  //сюда положим вычисляемые стили карты продукта

        },
        methods: {
            showModal() {
//alert("1 if ",this.isModalVisible,this.isModalShow)                
                if (this.isModalShow ===false){
                    this.isModalVisible = true;
                    this.isModalShow = true;

//alert("2 if ",this.isModalVisible,this.isModalShow);
                }
                else {
                    this.isModalShow=false;
                }
                
                //alert(this.isModalVisible)
            },
            closeModal() {
                this.isModalVisible = false;
                //alert(this.isModalVisible)
            },
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
        box-shadow: gray;
        background-color: rgba(180, 185, 180, 0.4);

        border-radius: 5px;
        margin-top: 5%;
        margin-left: 2%;
        margin-right: 2%;
        padding-top: 1%;

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