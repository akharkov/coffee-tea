
<template>
     <transition name="fade">
          <div class="myModalBackground">

               <div class="myModalDiv cont">
                    <!-- <div class="row cont"> -->
                         <div class="row" v-on:click="closeModal()"  style="float: left"> 
                              X                         
                         </div>  
                         <div class=" productPic" style="margin:0">
                              <img  :src="this.picPath" alt="_А где картинка? :)_" >
                         </div>

                         <div class="productData">
                             {{this.$store.state.tmpProdObj }} 
                         </div>
                    <!-- </div> -->

               </div>

          </div>   

          
     </transition>
    
</template>

<script>
export default {
     name: 'fullscreenproduct',
     props:{itemProduct: Object},
     components:{},
     data: function(){
          return {
                cardData: this.$store.state.tmpProdObj,
                //picPath: this.productPic(),
                pathImage:""
                //this.itemProduct
          }
     },
     beforeCreate:function(){
         
     },
     created(){

     }, 
     methods:{
          closeModal() {
               this.$store.commit('fullProductHide');                
          },
          productPic(){
               //const myPath = `../../assets/images/${this.$store.state.tmpProdObj.productType.productPicPath}/${this.$store.state.tmpProdObj.pic}`;
               //const myPath = '';
               //const myPath = `../../assets/images/${this.productType.productPicPath}/${this.pic}`;


               //console.log(`myPath = ${myPath}`);
               

               return 'Ops';//myPath;

          }

     },
     computed:{

          picPath: function(){
               this.cardData = this.$store.state.tmpProdObj;
               




const keys = Object.keys(this.cardData );
keys.forEach(key => {
     console.log(`qq ${key} : ${this.cardData[key]}`);
});
               //const myPath=`WOW+${this.cardData.productType.productPicPath}`;

               const myPath = `../../assets/images/${this.cardData.productType.productPicPath}/${this.cardData.pic}`;
               console.log(`calc myPath = ${myPath}`);
               

               return myPath;
          }


     },
     mounted(){


     }
    
}
</script>

<style scoped>

/* styles for transitions */
    .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
    }
/* styles for transitions */ 
     .myModalBackground{
        position: fixed;
        height: 100%;
        width: 100%;
        top:0;
        left:0;       
        
        background-color: rgba(210, 230, 210, 0.8); 
        z-index: 999999;
        

                             
  
    }
     .myModalDiv{
        position:  relative; 
        margin: 5%;
        padding: 2%;
        max-width: 90%;
        max-height: fill-available;
        
        background-color: rgba(50, 112, 50, 0.4); 

        align-items: center;
        /* top: 50%; */   /* position the top  edge of the element at the middle of the parent */
        /* left: 50%; */  /* position the left edge of the element at the middle of the parent */

        /* This is a shorthand of translateX(-50%) and translateY(-50%) */
         
        /* transform: translate(-50%, -50%);  */
        border: 2px solid  white;
        border-radius: 1em;
        -webkit-box-shadow: 10px 10px 10px 0px rgba(14, 49, 75, 0.4);
        -moz-box-shadow: 10px 10px 10px 0px rgba(14, 49, 75, 0.4);
        box-shadow: 10px 10px 10px 0px rgba(14, 49, 75, 0.4);
  
    }

    .cont{
         position: relative;
         height: 100%;
         width: 100%;

    }


    .productPic{
        
        position:  absolute; 
        /* left: 50%; */  /* position the left edge of the element at the middle of the parent */
     /* align-items: center; */
        border-radius: 5%;
        max-width: 100%;
        height: 40%;

    }

    .productPic img {
        /* background: rgba(253, 253, 253, 0); */
        border-radius: 5%;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: 50% 50%;

        box-shadow: 5px 5px 5px rgba(116, 114, 114, 0.8);


        /* border-radius: 50%; *//* 
-webkit-box-shadow: inset 9px 9px 30px -12px rgba(0,0,0,0.7);
-moz-box-shadow: inset 9px 9px 30px -12px rgba(0,0,0,0.7);
box-shadow: inset 9px 9px 30px -12px rgba(0,0,0,0.7); */
        }

        .productData{
            
             position: absolute;
             height: 50%;
             bottom: 1px;
             /* overflow: hidden; */
             overflow-y: scroll;

        }

/* ======== */
    .productData::-webkit-scrollbar {
        width: 10px;
        background-color: #44701b25;
        }
/* бегунок */
.productData::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #f6faf5;
}


/* линия скроллера */
.productData::-webkit-scrollbar-track {
 /*  -webkit-box-shadow: inset 0 0 10px rgba(248, 246, 246, 0.1); */
  border-radius: 10px;
  background-color: #0b570b26;
  box-shadow: rgba(245, 246, 246, 0.102);
}        

    




</style>