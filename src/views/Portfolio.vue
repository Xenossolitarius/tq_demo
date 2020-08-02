<template>
    <div class="portfolio">
        <PortfolioImage :contact="contact" />
        <PortfolioData :contact="contact" v-if="mode === $options.portfolio_modes.DEFAULT"/>
        <PortfolioEdit :contact="contact" v-else />
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
        }
    },
    methods: {
        updateSettings(){
            console.log(this.$route)
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
    padding-left: 60px;
    padding-right: 60px;

    &__separator{
        box-sizing: border-box;
        height: 2px;
        width: 100%;
        border: 1px solid $main-color;
        margin:0;
    }
}
</style>