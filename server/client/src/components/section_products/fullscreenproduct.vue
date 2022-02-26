

<template>
     <transition name="fade">
          <div class="myModalBackground">
               <div class="myModalDiv">
                    <div class="row">
                         <div v-on:click="closeModal()"  style="float: left"> 
X                         
                         </div>  
                         <div class="row" style="margin:0">
                              <div class="col ">
                                   <img :src="itemImage" alt="_А где картинка? :)_" >
                            {{this.$store.state.tmpObj}}
                            

                              </div>
                        
                         </div>
                    </div>

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
                cardData: this.itemProduct
          }
     },
     beforeCreate:function(){
         
     },
     created(){

     }, 
     methods:{
          closeModal() {
               this.$store.commit('fullProductHide');                
          }

     },
     computed:{
itemImage(picPath, picName) {
     const fileName="not file";
     
        console.log(this);
      //const fileName = `../../assets/images/coffee/pic2.jpg` //${this.Item.pic}
      // const fileName = `../../assets/images/${this.Item.productType.productPicPath}/${this.Item.pic}` //${this.Item.pic}
      //this.Item.pic; //.toLowerCase()



      console.log('fileName==',fileName);
      return /* require */(`${fileName}`);
      //return require(`..\\..\\img${this.Item.productType.productPicPath}${fileName}.jpg`);
      //return `${fileName}`;

    }

     },
     mounted(){


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
     .myModalDiv{
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

</style>