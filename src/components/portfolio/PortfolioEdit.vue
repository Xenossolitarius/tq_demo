<template>
<div class="portfolio__edit">
    <div class="portfolio__edit__header">
        <ReturnIcon @click="$router.go(-1)"/>
        <div class="portfolio__edit__header__delete">
            Delete
        </div>
        <TrashIcon/>
    </div>
    <hr class="portfolio__separator"/>
    <div class="portfolio__edit__body">
        <div class="body__section">
            <div class="body__section__label">
                <UserIcon/>
                <span class="body__section__label__name">full name</span>
            </div>
            <EditInput :initalValue="contact.nameFull" />
        </div>
        <hr class="portfolio__separator"/>
        <div class="body__section">
            <div class="body__section__label">
                <EmailIcon/>
                <span class="body__section__label__name">email</span>
            </div>
            <EditInput :initalValue="contact.email" />
        </div>
        <hr class="portfolio__separator"/>
        <div class="body__section">
            <div class="body__section__label">
                <NumberIcon/>
                <span class="body__section__label__name">number</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import EmailIcon from '@/assets/svg/EmailIcon'
import NumberIcon from '@/assets/svg/NumberIcon'
import UserIcon from '@/assets/svg/UserIcon'
import ReturnIcon from '@/assets/svg/ReturnIcon'
import TrashIcon from '@/assets/svg/TrashIcon'
import EditInput from '@/components/materials/EditInput'
export default {
    name: 'PortfolioEdit',
        props: {
        contact: {
            type: Object,
            required: false,
            default: function() {
                return {
                    shorthand: '',
                    imgUrl: null,
                    nameFull: '',
                    email: '',
                    favorite: false,
                    numbers: []
                }
            }
        }
    },
    components: {
        EmailIcon,
        NumberIcon,
        UserIcon,
        ReturnIcon,
        TrashIcon,
        EditInput
    },
}
</script>

<style lang="scss">    
.portfolio__edit{
    max-width: 630px;
    width: 100%;
    margin-left: 31px;

    &__header{
        display: flex;
        padding-top: 52px;
        padding-bottom: 23px;
        align-items: center;

        .return_icon{
            margin-left: 8px;
            cursor: pointer;
        }

        &__delete{
            font-size: 14px;
            margin-left: auto;
        }

        .trash-icon{
            margin-left: 15px;
        }
    }

    &__body{
        width: 100%;
        font-size: 16px;

        .body__section{
            padding-top: 17px;

            &__label{
                text-align: left;
                margin-bottom: 22px;
                &__name{
                    margin-left: 15px;
                    font-size: 16px;
                    font-weight: bold;
                    color: $main-color;
                }
            }
            .edit__input{
                margin-bottom: 30px;
            }
        }
    }
}

</style>