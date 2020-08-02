<template>
  <div class="contacts__contact">
    <img class="contacts__contact__image" :src="contact.imgUrl"/>
    <div class="contacts__contact__name">{{contact.nameFull}}</div>
    <FavoriteControl :contact="contact"/>
    <div class="contacts__contact__control">
        <EditIcon @click="editContact(contact)"/>
        <TrashIcon @click="deleteContact(contact)"/>
    </div>
  </div>
</template>

<script>
import EditIcon from '@/assets/svg/EditIcon'
import TrashIcon from '@/assets/svg/TrashIcon'
import FavoriteControl from '@/components/FavoriteControl'
export default {
    name: 'Contact',
    components: {
        FavoriteControl,
        EditIcon,
        TrashIcon
    },
    props: {
        contact: {
            type: Object,
            required: true
        }
    },
    methods: {
        editContact(contact){
            console.log('edit')
            console.log(contact)
        },
        deleteContact(contact){
            console.log('delete')
            console.log(contact)
        }
    }
}
</script>

<style lang="scss">
.contacts__contact {
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

    &:hover {
        border: 1px solid $main-color;

        .contacts__contact__control {
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
    }

    &__name {
        margin-top: 13px;
        font-size: 18px;
        color: $text-color;
        font-weight: bold;
        letter-spacing: 0;
    }

    &__control {
        position: absolute;
        right: 0;
        padding-top: 15px;
        opacity: 0;

        .trash-icon {
            margin-right: 17px;
            cursor: pointer;
        }
        .edit-icon {
            margin-right: 26px;
            cursor: pointer;
        }
    }

    .favorite__control__wrapper{
        position: absolute;
        left: 0;
        margin-left: 17px;
        margin-top: 15px;
    }
}
</style>