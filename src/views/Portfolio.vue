<template>
    <div class="portfolio">
        <PortfolioImage
            :key="$route.path" 
            :contact="contact" 
            :allowEdit="mode === $options.portfolio_modes.EDIT"
            v-on:newImage="newImage = $event"
        />
        <PortfolioData :contact="contact" v-if="mode === $options.portfolio_modes.DEFAULT" />
        <PortfolioEdit :contact="contact" :newImage="newImage" v-else />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PortfolioData from '@/components/portfolio/PortfolioData'
import PortfolioEdit from '@/components/portfolio/PortfolioEdit'
import PortfolioImage from '@/components/portfolio/PortfolioImage'
import PortfolioRedirect from '@/components/mixins/PortfolioRedirect'
export default {
    name: 'Portfolio',
    mixins: [PortfolioRedirect],
    components: {
        PortfolioData,
        PortfolioEdit,
        PortfolioImage
    },
    computed: {
        ...mapGetters(['getContact']),
    },
    data(){
        return {
            contact: null,
            mode: null,
            newImage: undefined,
        }
    },
    methods: {
        updateSettings(){
            const { shorthand, mode } = this.$route.params
            if(mode){
                this.mode = mode
            }else{
                this.mode = this.$options.portfolio_modes.DEFAULT
            }
            if(shorthand){
                this.contact = this.getContact(shorthand)
            }
        }
    },
    created(){
        this.updateSettings()

    },
    watch:{
        $route: function(){
            this.updateSettings()
        }
    }
}
</script>

<style lang="scss">
.portfolio{
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    padding-top: 57px;
    padding-left: 12px;
    padding-right: 12px;

    @media #{$mq-mobile} {
        padding: 0;
        justify-content: start;
    }

    &__separator{
        box-sizing: border-box;
        height: 2px;
        width: 100%;
        border: 1px solid $main-color;
        margin: 0;

        @media #{$mq-mobile} {
            display: block;
            width: auto;
            margin: 0 22px;
            box-sizing: border-box;
        }
    }
}
</style>