<template>
  <div class="contact" @click="redirectPortfolio($options.portfolio_modes.DEFAULT,contact)">
    <img class="contact__image" :src="contact.imgUrl"/>
    <div class="contact__name">{{contact.nameFull}}</div>
    <FavoriteControl :contact="contact"/>
    <div class="contact__control">
        <EditIcon @click="redirectPortfolio($options.portfolio_modes.EDIT,contact)"/>
        <DeleteControl :contact="contact"/>
    </div>
  </div>
</template>

<script>
import EditIcon from '@/assets/svg/EditIcon'
import FavoriteControl from '@/components/FavoriteControl'
import DeleteControl from '@/components/DeleteControl'
import PortfolioRedirect from '@/components/mixins/PortfolioRedirect'
export default {
    name: 'Contact',
    mixins: [PortfolioRedirect],
    components: {
        DeleteControl,
        FavoriteControl,
        EditIcon,
    },
    props: {
        contact: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss">
.contact {
    position: relative;
    box-sizing: border-box;
    height: 150px;
    background-color: $background-color;
    width: 270px;
    border: 1px solid  fade-out( $contact-border-color, 0.6 );
    border-radius: 4px;
    margin: 0 15px 30px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    @media #{$mq-mobile} {
        width: 100%;
        height: 60px;
        flex-direction: row;
        margin: 0 0 10px 0;
    }

    &:hover {
        border: 1px solid $main-color;

        .contact__control {
            opacity: 1;
        }
    }

    &__image {
        box-sizing: border-box;
        border-radius: 50%;
        width: 66px;
        height: 66px;
        border: 3px solid fade-out( $contact-border-color, 0.7 );
        margin-top: 27px;

        @media #{$mq-mobile} {
            margin-top: 0px;
            width: 46px;
            height: 46px;
            margin-left: 13px;
        }
    }

    &__name {
        margin-top: 13px;
        font-size: 18px;
        color: $text-color;
        font-weight: bold;
        letter-spacing: 0;

        @media #{$mq-mobile} {
            margin-top: 0px;
            margin-left: 25px;
            font-size: 14px;
        }
    }

    &__control {
        position: absolute;
        right: 0;
        padding-top: 15px;
        opacity: 0;
        display: flex;
        align-items: center;

        @media #{$mq-mobile} {
            position: static;
            padding-top: 0;
            opacity: 1;
        }

        .trash-icon {
            margin-right: 17px;
            cursor: pointer;
        }
        .edit-icon {
            margin-right: 26px;
            cursor: pointer;

            @media #{$mq-mobile} {
                margin-right: 32px;
                margin-left: 32px;
                margin-top: 3px;
            }
        }
    }

    .favorite__control__wrapper{
        position: absolute;
        left: 0;
        margin-left: 17px;
        margin-top: 15px;

        @media #{$mq-mobile} {
            position: static;
            margin: 0;
            margin-left: auto;
        }
    }
}
</style>