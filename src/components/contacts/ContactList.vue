<template>
  <div class="contacts__list" ref="content_size">
      <div class="contacts__list__wrapper" :style="styleObject">
            <NewContact v-if="!isFavorite"/>
            <Contact v-for="contact in contacts" :key="contact.shorthand" :contact="contact"/>
      </div>
  </div>
</template>

<script>
import contact_filters from '@/enums/contact_filters.js'
import Contact from '@/components/contacts/Contact'
import NewContact from '@/components/contacts/NewContact'
import { throttle } from '@/scripts/helpers.js'
export default {
    name: 'ContactList',
    contact_filters,
    props: {
        contacts: {
            type: Array,
            required: false,
            placeholder: []
        }
    },
    components: {
        Contact,
        NewContact
    },
    throttle,
    computed: {
        isFavorite(){
            return this.$route.params.filter === this.$options.contact_filters.FAVORITE.ROUTE
        }
    },
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
            if( itemsPerRow > 1){
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
    margin-left: 25px;
    margin-right: 25px;
    display: flex;
    justify-content: center;

    @media #{$mq-mobile} {
        margin-top: 35px;
        margin-left: 8px;
        margin-right: 8px;
    }

    &__wrapper{
        display: flex;
        flex-wrap: wrap;
    }
}
</style>