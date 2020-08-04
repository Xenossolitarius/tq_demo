<template>
    <div class="portfolio">
        <PortfolioImageTran>
            <PortfolioImage :allowEdit="true" v-on:newImage="newImage = $event" />
        </PortfolioImageTran>
        <PortfolioEdit :newImage="newImage" :mode="$options.portfolio_modes.NEW"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import portfolio_modes from '@/enums/portfolio_modes.js'
import PortfolioEdit from '@/components/portfolio/PortfolioEdit'
import PortfolioImage from '@/components/portfolio/PortfolioImage'
import PortfolioImageTran from '@/components/portfolio/PortfolioImageTran'
export default {
    name: 'NewPortfolio',
    portfolio_modes,
    components: {
        PortfolioEdit,
        PortfolioImage,
        PortfolioImageTran
    },
    computed: {
        ...mapGetters(['getContact']),
    },
    data(){
        return {
            newImage: undefined
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
    position: relative;

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
            margin: 0 25px;
            box-sizing: border-box;
        }
    }
}
</style>