<template>
  <div class="portfolio">
      <img class="portfolio__image" :src="contact.imgUrl" :alt="contact.nameFull">
      <div class="portfolio__data">
            <div class="portfolio__data__header">
                <ReturnIcon @click="$router.go(-1)"/>
                <div class="portfolio__data__header__label">
                    {{contact.nameFull}}
                </div>
                <FavoriteControl :contact="contact"/>
                <EditIcon @click="redirectPortfolio($options.portfolio_modes.EDIT,contact)"/>
            </div>
            <hr class="portfolio__separator"/>
            <PortfolioData :contact="contact"/>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PortfolioData from '@/components/portfolio/PortfolioData'
import ReturnIcon from '@/assets/svg/ReturnIcon'
import EditIcon from '@/assets/svg/EditIcon'
//import TrashIcon from '@/assets/svg/TrashIcon'
import FavoriteControl from '@/components/FavoriteControl'
import PortfolioRedirect from '@/components/mixins/PortfolioRedirect'
export default {
    name: 'Portfolio',
    mixins: [PortfolioRedirect],
    components: {
        ReturnIcon,
        EditIcon,
        //TrashIcon,
        FavoriteControl,
        PortfolioData
    },
    computed: {
        ...mapGetters(['getContact'])
    },
    data(){
        return {
            contact: null,
        }
    },
    created(){
        const { shorthand } = this.$route.params
        if( shorthand ){
            this.contact = this.getContact(shorthand)
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
    }

    &__image{
        box-sizing: border-box;
        height: 186px;
        width: 186px;
        border: 3px solid fade-out( $contact-border-color, 0.7 );
        border-radius: 50%;
    }

    &__data{
        max-width: 630px;
        width: 100%;
        margin-left: 28px;

        &__header{
            display: flex;
            padding-top: 33px;
            padding-bottom: 27px;
            align-items: center;

            .return_icon{
                margin-left: 8px;
                cursor: pointer;
            }

            &__label{
                font-weight: bold;
                color: $text-color;
                font-size: 28px;
                margin-left: 20px;
            }

            .favorite__control__wrapper{
                margin-left: auto;
            }

            .edit-icon{
                margin-left: 44px;  
                margin-top: 4px;
                cursor: pointer;
            }


        }
    }

}
</style>