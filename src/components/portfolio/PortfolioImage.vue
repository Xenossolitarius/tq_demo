<template>
  <img class="portfolio__image" :src="image">
</template>

<script>
export default {
    name: 'PortfolioImage',
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
}
</style>