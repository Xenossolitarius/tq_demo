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

    @media #{$mq-mobile} {
        margin-left: 0;
        max-width: none;
    }

    &__header{
        display: flex;
        padding-top: 33px;
        padding-bottom: 27px;
        align-items: center;

        @media #{$mq-mobile} {
            padding-top: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid $text-color;
            margin-bottom: 98px;
        }

        .return_icon{
            margin-left: 8px;
            cursor: pointer;

            @media #{$mq-mobile} {
                width: 16px;
                margin-left: 30px;
            }
        }

        &__label{
            font-weight: bold;
            color: $text-color;
            font-size: 28px;
            margin-left: 20px;

            @media #{$mq-mobile} {
                position: absolute;
                top: 135px;
                margin-left: 101px;
                font-size: 21px;
                height: 28px;
                line-height: 28px;;
            }
        }

        .favorite__control__wrapper{
            margin-left: auto;

            @media #{$mq-mobile} {
                margin-right: 34px;
            }

        }

        .edit-icon{
            margin-left: 44px;  
            margin-top: 4px;
            cursor: pointer;

            @media #{$mq-mobile} {
                margin-right: 30px;
            }
        }
    }

    &__body{
        width: 100%;
        padding-top: 64px;
        padding-left: 64px;
        font-size: 16px;

        @media #{$mq-mobile} {
            box-sizing: border-box;
            padding-top: 23px;
            padding-left: 0;
        }

        .data__wrapper{
            text-align: left;
            margin-bottom: 71px;

            @media #{$mq-mobile} {
                margin-bottom: 50px;
                width: 280px;
                margin-left: auto;
                margin-right: auto;
                
            }

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

                @media #{$mq-mobile} {
                    margin-left: 9px;
                }
            }

            &__addr{
                color: $text-color;

                @media #{$mq-mobile} {
                    display: block;
                    margin-top: 12px;
                    margin-left: 22px;
                }
            }

            &__numbers{
                display: inline-block;
                vertical-align: top;
                color: $text-color;

                @media #{$mq-mobile} {
                    display: block;
                    margin-left: 22px;
                    margin-top: 22px;
                }

                &__number{
                    margin-bottom: 43px;

                    @media #{$mq-mobile} {
                        margin-bottom: 32px;
                    }

                    .description{
                        display: inline-block;
                        font-size: 14px;
                        text-transform: uppercase;
                        font-weight: bold;
                        width: 89px;

                        @media #{$mq-mobile} {
                            width: 101px;
                        }
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