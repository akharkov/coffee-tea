<template>
    <div  class="newsCard" style="overflow:hidden" v-on:click="newsShow(Item, $event)">
        <!-- <p> {{Item.newsTitle}} </p>
        <p > {{Item.newsBody}} </p>   --> 

       <modal_win v-show="isModalVisible"  @close="closeModal" >
           <div>ttttt</div>
       </modal_win> 
    </div>
    
    
  
 
</template>

<script>
    import modal_win from '@/components/other/modal_win';

    export default {
        name: 'newsCard',
        props:{Item: Object},
        componens:{
            modal_win
        },
        data: function( ){
        
            return{
                cardStyle:{},
                clickCount:0,
                isModalVisible: false, /* управление компонентом модального окна */
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
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            },
            newsShow: function (Item, event){

                alert(Item.newsBody);
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

        

</style>