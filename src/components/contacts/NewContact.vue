<template>
  <div class="contact new" @click="redirectPortfolio($options.portfolio_modes.NEW)">
      <AddIcon/>
      <div class="new__label">Add new</div>
  </div>
</template>

<script>
import AddIcon from '@/assets/svg/AddIcon'
import PortfolioRedirect from '@/components/mixins/PortfolioRedirect'
export default {
    name: 'NewContact',
    mixins: [PortfolioRedirect],
    components: {
        AddIcon
    }
}
</script>

<style lang="scss">
.contact.new{
    border: 1px dashed $main-color;
    opacity: 0.5;

    &:hover{
        opacity: 1;
        
    }

    .add_icon{
        margin-top: 52px;

        @media #{$mq-mobile} {
            margin-top: 0;
            margin-left: 32px;
        }
    }

    .new__label{
        color: $main-color;
        font-size: 16px;
        margin-top: 11px;

        @media #{$mq-mobile} {
            margin-top: 0;
            font-size: 14px;
            margin-left: 18px;
        }
    }
}
</style>