<template>
    <div class="portfolio">
        <PortfolioImage :allowEdit="true" v-on:newImage="newImage = $event" />
        <PortfolioEdit :newImage="newImage" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PortfolioEdit from '@/components/portfolio/PortfolioEdit'
import PortfolioImage from '@/components/portfolio/PortfolioImage'
export default {
    name: 'NewPortfolio',
    components: {
        PortfolioEdit,
        PortfolioImage
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