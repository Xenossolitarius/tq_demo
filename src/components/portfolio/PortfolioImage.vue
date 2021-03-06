<template>
<div 
    class="portfolio__image" 
    :class="[image ? '' : 'empty', allowEdit ? 'allowEdit' : '']"
    >
    <img class="profile__img" :src="image" v-if="image">
    <input @change="imageHandle" class="file-input" type="file" accept="image/*" ref="file_input">
    <div class="overlay image" v-if="image" @click="removeImage()">
        <CloseIconLarge/>
    </div>
    <div class="overlay no-image" @click="imageUpload" v-else>
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
        },
        allowEdit: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data(){
        return {
            image: null
        }
    },
    methods: {
        removeImage(){
            this.image = null;
            this.$emit('newImage', this.image)
        },
        imageUpload(){
            this.$refs.file_input.click()
        },
        imageHandle(e){
            const selectedImage = e.target.files[0]
            this.createBase64Image(selectedImage)
        },
        createBase64Image(fileObject){
            const reader = new FileReader()

            reader.readAsDataURL(fileObject)

            reader.onload = (e) => {
                this.image = e.target.result;
                this.$emit('newImage', this.image)
            }
        }
    },
    created(){
        if(this.contact){
            this.image = this.contact.imgUrl
        }
    }
}
</script>

<style lang="scss">
.portfolio__image{
    box-sizing: border-box;
    height: 186px;
    width: 186px;
    min-width: 186px;
    border: 3px solid fade-out( $contact-border-color, 0.7 );
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    pointer-events: none;
    z-index: 1;
    transition: all $glob-trans-type $glob-trans-duration;

    @media #{$mq-mobile} {
        position: absolute;
        top: 74px;
        left: 0;
        width: 56px;
        height: 56px;
        min-width: 56px;
        margin-left: 22px;
        transform: translateX(0%);
    }

    &.allowEdit{
        pointer-events: auto;

        @media #{$mq-mobile} {
            width: 156px;
            height: 156px;
            min-width: 156px;
            margin-left: 0;
            left: 50%;
            transform: translateX(-50%);
        }

        .overlay{
            @media #{$mq-mobile} {
                width: 156px;
                height: 156px;
            }
        }
    }

    .profile__img{
        width: 100%;
        height: 100%;
    }

    .file-input{
        display: none;
    }

    &.empty{
        background-color: fade-out($main-color,0.6);
    }
    

    &:hover{
        .overlay.image{
            background-color: $overlay-color;

            .close-icon-large{
                transform: translateY(0%);
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
        transition: all $glob-trans-type $glob-trans-duration;

        @media #{$mq-mobile} {
            width: 56px;
            height: 56px;
        }

        .close-icon-large{
            opacity: 0;
            transform: translateY(25px);
            transition: all $glob-trans-type $glob-trans-duration;
        }
    }
}
</style>