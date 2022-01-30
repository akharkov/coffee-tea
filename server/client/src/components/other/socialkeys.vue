<template>
    <div class="row" style=" margin:3px">
        
        <div class="social instagram">
            <a href="#" target="_blank"><i class="fa fa-instagram fa-2x"></i></a>
        </div>
        <div class="social facebook">
            <a href="#" target="_blank"><i class="fa fa-facebook fa-2x"></i></a>    
        </div>
        <div class="social vk">
            <a href="#" target="_blank"><i class="fa fa-vk fa-2x"></i></a>    
        </div>
        <div class="social odnoklassniki">
            <a href="#" target="_blank"><i class="fa fa-odnoklassniki fa-2x"></i></a>   
        </div>
        
        <div class="social telegram">
            <a href="#" target="_blank"><i class="fa fa-paper-plane fa-2x"></i></a>
        </div>
        
        <div class="social whatsapp">
            <a href="#" target="_blank"><i class="fa fa-whatsapp fa-2x"></i></a>
        </div>

        <!-- <div class="social twitter">
            <a href="#" target="_blank"><i class="fa fa-twitter fa-2x"></i></a>
        </div> -->
        <!-- <div class="social github">
            <a href="#" target="_blank"><i class="fa fa-github fa-2x"></i></a>
        </div> -->
        <!-- <div class="social youtube">
            <a href="#" target="_blank"><i class="fa fa-youtube fa-2x"></i></a>
        </div> -->
        <!-- <div class="social google-pluse">
            <a href="#" target="_blank"><i class="fa fa-google-plus fa-2x"></i></a>
        </div> -->
        <!-- <div class="social skype">
            <a href="#" target="_blank"><i class="fa fa-skype fa-2x"></i></a>
        </div> -->
        
        <!-- <div class="social pinterest">
            <a href="#" target="_blank"><i class="fa fa-pinterest fa-2x"></i></a>
        </div>  -->
        <!-- <div class="social linkedin">
            <a href="#" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a>
        </div> -->
        <!-- <div class="social tumblr">
            <a href="#" target="_blank"><i class="fa fa-tumblr fa-2x"></i></a>
        </div> -->
        <!-- <div class="social windows">
            <a href="#" target="_blank"><i class="fa fa-windows fa-2x"></i></a>
        </div> -->
        <!-- <div class="social weibo">
            <a href="#" target="_blank"><i class="fa fa-weibo fa-2x"></i></a>
        </div> -->
        <!-- <div class="social dropbox">
            <a href="#" target="_blank"><i class="fa fa-dropbox fa-2x"></i></a>
        </div>  -->           
                
    </div>
</template>

<script>
    export default {
        name: 'socialkeys',
        components: {
            /* sectionPromo: () => import('@/components/promo/section_promo.vue') */

        },
        beforeCreate: function () {
            
        
        },
        data: function () {
            return {
            mess: "",
            news: []
            }
        },
        methods:{

        }
        
    }
</script>

<style >



/* ========= соц.сети ========= */
    @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
    .social a {
        color:rgba(197, 223, 125, 0.5); 
        text-align: center;
        width: 48px;
        height: 48px;
        float: left;
        /* background: #fff; */
        background: rgba(150, 156, 138, 0.2);
        border: 1px solid #ccc;
        box-shadow: 0 2px 4px rgba(0,0,0,0.4), inset 0 0 50px rgba(0, 0, 0, 0.1);
        border-radius: 24px;
        /* margin: 3% 10px 10px 0; */
        margin: 10% 5px;
        padding: 5px;
        /* color: #000; */
    }
    .github a:hover {background: #191919; color: #fff;}
    .youtube a:hover {background: #c4302b; color: #fff;}
    .google-pluse a:hover {background: #DD4B39; color: #fff;}
    .twitter a:hover {background: #00acee; color: #fff;}
    .instagram a:hover {background: #3f729b; color: #fff;}
    .facebook a:hover {background: #3b5998; color: #fff;}
    .skype a:hover {background: #00aff0; color: #fff;}
    .vk a:hover {background: #5d84ae; color: #fff;}
    .odnoklassniki a:hover {background: #f93; color: #fff;}
    .pinterest a:hover {background: #c8232c; color: #fff;}
    .linkedin a:hover {background: #0e76a8; color: #fff;}
    .telegram a:hover {background: #249bd7; color: #fff;}
    .tumblr a:hover {background: #34526f; color: #fff;}
    .windows a:hover {background: #125acd; color: #fff;}
    .whatsapp a:hover {background: #50b154; color: #fff;}
    .weibo a:hover {background: #d52b2b; color: #fff;}
    .dropbox a:hover {background: #1087dd; color: #fff;}    
/* ========= соц.сети ========= */
</style>