<template>
<div class="portfolio__image" :class="image ? '' : 'empty'">
    <img :src="image" v-if="image">
    <div class="overlay image" v-if="image">
        <CloseIconLarge/>
    </div>
    <div class="overlay no-image" v-else>
        <UploadIcon/>
    </div>
</div>
</template>

<script>
import CloseIconLarge from '@/assets/svg/CloseIconLarge'
import UploadIcon from '@/assets/svg/UploadIcon'
export default {
    name: 'PortfolioImage',
    components: {
        CloseIconLarge,
        UploadIcon
    },
    props: {
        contact: {
            type: Object,
            required: false
        }
    },
    data(){
        return {
            image: null
        }
    },
    created(){
        if(this.contact){
            this.image= this.contact.imgUrl
        }
    }
}
</script>

<style lang="scss">
.portfolio__image{
    box-sizing: border-box;
    height: 186px;
    width: 186px;
    border: 3px solid fade-out( $contact-border-color, 0.7 );
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &.empty{
        background-color: $main-color;
    }
    

    &:hover{
        .overlay.image{
            background-color: $overlay-color;

            .close-icon-large{
                opacity: 1;
            }

        }
    }

    .overlay{
        position: absolute;
        left: -3px;
        top: -3px;
        background-color: transparent;
        height: 186px;
        width: 186px;
        display: flex;
        justify-content: center;
        align-items: center;

        .close-icon-large{
            opacity: 0;
        }


    }
}
</style>