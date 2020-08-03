<template>
<div class="portfolio__data">
    <div class="portfolio__data__header">
        <ReturnIcon @click="$router.go(-1)"/>
        <div class="portfolio__data__header__label">
            {{contact.nameFull}}
        </div>
        <FavoriteControl 
            :contact="contact"
        />
        <EditIcon 
            @click="redirectPortfolio($options.portfolio_modes.EDIT,contact)"
        />
    </div>
    <hr class="portfolio__separator"/>
    <div class="portfolio__data__body">
        <div class="data__wrapper">
            <EmailIcon/>
            <span class="data__wrapper__label">email</span>
            <span class="data__wrapper__addr">{{contact.email}}</span>
        </div>
        <div class="data__wrapper">
            <NumberIcon/>
            <span class="data__wrapper__label">numbers</span>
            <span class="data__wrapper__numbers">
                <div 
                    class="data__wrapper__numbers__number"
                    v-for="(number,index) in contact.numbers"
                    :key="index"
                >
                    <span class="description">
                        {{number.desc}}
                    </span>
                    <span class="number">
                        {{number.number}}
                    </span>
                </div>

            </span>
        </div>
    </div>
</div>
</template>

<script>
import EmailIcon from '@/assets/svg/EmailIcon'
import NumberIcon from '@/assets/svg/NumberIcon'
import ReturnIcon from '@/assets/svg/ReturnIcon'
import EditIcon from '@/assets/svg/EditIcon'
import FavoriteControl from '@/components/FavoriteControl'
import PortfolioRedirect from '@/components/mixins/PortfolioRedirect'
export default {
    name: 'PortfolioData',
    mixins: [PortfolioRedirect],
    props: {
        contact: {
            type: Object,
            required: true
        }
    },
    components: {
        EmailIcon,
        NumberIcon,
        ReturnIcon,
        EditIcon,
        FavoriteControl,
    }
}
</script>

<style lang="scss">    
.portfolio__data{
    max-width: 630px;
    width: 100%;
    margin-left: 30px;

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

    &__body{
        width: 100%;
        padding-top: 64px;
        padding-left: 64px;
        font-size: 16px;

        .data__wrapper{
            text-align: left;
            margin-bottom: 71px;

            .email-icon{
                display: inline-block;
                vertical-align: middle;
            }

            &__label{
                display: inline-block;
                width: 95px;
                color: $main-color;
                font-weight: bold;
                margin-left: 15px;
            }

            &__addr{
                color: $text-color;
            }

            &__numbers{
                display: inline-block;
                vertical-align: top;
                color: $text-color;

                &__number{
                    margin-bottom: 43px;
                    .description{
                        display: inline-block;
                        font-size: 14px;
                        text-transform: uppercase;
                        font-weight: bold;
                        width: 89px;
                    }

                    .number{
                        font-size: 16px;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}

</style>