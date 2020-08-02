<template>
    <div class="portfolio">
        <PortfolioImage />
        <PortfolioEdit />
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
    created(){
        console.log(this.$route)
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