<!-- https://itnan.ru/post.php?c=1&p=349306 -->
<!-- http://news.shamcode.ru/blog/oh-uzh-eti-modalnyie-okna-ili-pochemu-ya-polyubil-render-funktsii-v-vuejs/ -->

<template>
  <div>
    test
    <transition name="modal-fade">
      
      <div class="modal-backdrop">




        <div class="modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header
            class="modal-header"
            id="modalTitle"
          >
            <slot name="header">
              This is the default tile!

              <button
                type="button"
                class="btn-close"
                @click="close"
                aria-label="Close modal"
              >
                x
              </button>
            </slot>
          </header>
          <section
            class="modal-body"
            id="modalDescription"
          >
            <slot name="body">
              I'm the default body!
            </slot>
          </section>
          <footer class="modal-footer">
            <slot name="footer">
              I'm the default footer!

              <button
                type="button"
                class="btn-green"
                @click="close"
                aria-label="Close modal"
              >
                Close me!
              </button>
            </slot>
          </footer>
        </div>
      </div>
    </transition>
  </div>  
</template>


<script>
 /* import modal from '@/components/other/modal.vue'; */
  export default {
    name: 'modal',
    /* components:{modal}, */
    methods: {
      close() {
        this.$emit('close');
      },
    },
    created(){
        
    },
    mounted(){
      //alert("ggggggggg");
    }
  };
</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>







