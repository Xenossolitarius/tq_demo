<template>
  <div class="delete__modal">
    <div class="delete__modal__label">Delete</div>
    <hr class="delete__modal__separator">
    <div class="delete__modal__message">
      Are you sure you want to delete this contact?
    </div>
    <WideButton @btn-click="exit()">Close</WideButton>
    <WideButton 
      :active="true" 
      class="delete__button" 
      @btn-click="confirm()"
      :loading="loading"
    >
      Delete
    </WideButton>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import WideButton from '@/components/materials/WideButton'
export default {
    name: 'DeleteModal',
    components: {
      WideButton,
    },
    computed: {
      ...mapGetters(['globalContact']),
    },
    data(){
      return{
        loading: false,
      }
    },
    methods: {
      ...mapActions(['deleteContact']),
      async confirm(){
        this.loading = true
        await this.deleteContact(this.globalContact)
        this.loading = false
        if(this.$route.name !== 'Home'){
          this.$router.push({name: 'Home'})
        }
        this.exit()
      },
      exit(){
        this.$emit('close-modal')
      }
    },

}
</script>

<style lang="scss">
.delete__modal {
  position: relative;
  display: block;
  width: 480px;
  height: 240px;
  background-clip: padding-box;
  outline: 0;
  margin: auto;
  z-index: 888;
  background-color: $background-color;
  border-radius: 4px;
  box-shadow: 0 0 14px 0 $modal-bs-color;
  font-size: 16px;

  @media #{$mq-mobile} {
    width: 315px;
    height: 330px;
  }

  &__label{
    margin-top: 20px;
    margin-left: 30px;
    font-family: 'Lato';
    font-weight: bold;
    text-align: left;
  }

  &__separator{
    margin-top: 20px;
    box-sizing: border-box;
    height: 2px;
    width: 480px;
    border: 1px solid $separator-color;

    @media #{$mq-mobile} {
      width: 315px;
    }
  }

  &__message{
    margin-top: 29px;
    @media #{$mq-mobile} {
      margin-left: 30px;
      margin-right: 30px;
      line-height: 28px;
    }
  }

  .wide__button{
    margin-top: 50px;
    float: left;
    margin-left: 31px;
    margin-right: 31px;
    font-size: 14px;
    font-weight: bold;

    @media #{$mq-mobile} {
      float: none;
      margin-top: 18px;
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      margin-left: 0;
      margin-right: 0;
    }

    &.delete__button{
      float: right;
      
      @media #{$mq-mobile} {
        float: none;
        margin-top: 50px;
        bottom: 90px;
      }      
    }
  }
}
</style>
