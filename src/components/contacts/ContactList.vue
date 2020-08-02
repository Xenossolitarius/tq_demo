<template>
  <div class="contacts__list" ref="content_size">
      <div class="contacts__list__wrapper" :style="styleObject">
            <Contact v-for="contact in contacts" :key="contact.id" :contact="contact"/>
      </div>
  </div>
</template>

<script>
import Contact from '@/components/contacts/Contact'
import { throttle } from '@/scripts/helpers.js'
export default {
    name: 'ContactList',
    props: {
        contacts: {
            type: Array,
            required: false,
            placeholder: []
        }
    },
    components: {
        Contact
    },
    throttle,
    data(){
        return {
            styleObject:{
                width: 'auto'
            }
        }
    },
    methods: {
        resizeContainer(){
            let contentWidth = this.$refs.content_size.clientWidth
            let itemsPerRow = Math.floor(contentWidth / 300);
            let newSize = itemsPerRow * 300;
            if( itemsPerRow > 0){
                this.styleObject.width = `${newSize}px`
            }else{
                this.styleObject.width = 'auto'
            }

        },
    },
    created(){
        this.throttledResize = this.$options.throttle(this.resizeContainer,60)
    },
    mounted(){
        this.resizeContainer()
        window.addEventListener('resize', this.throttledResize)
    },
    beforeDestroy(){
        window.removeEventListener('resize', this.throttledResize)
    }
}
</script>

<style lang="scss">
.contacts__list{
    margin-top: 61px;
    margin-left: 120px;
    margin-right: 120px;
    display: flex;
    justify-content: center;

    &__wrapper{
        display: flex;
        flex-wrap: wrap;
    }
}
</style>