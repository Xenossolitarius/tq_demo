<template>
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
</template>

<script>
import EmailIcon from '@/assets/svg/EmailIcon'
import NumberIcon from '@/assets/svg/NumberIcon'
export default {
    name: 'PortfolioData',
        props: {
        contact: {
            type: Object,
            required: true
        }
    },
    components: {
        EmailIcon,
        NumberIcon
    }
}
</script>

<style lang="scss">
.portfolio__data__body{
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
</style>