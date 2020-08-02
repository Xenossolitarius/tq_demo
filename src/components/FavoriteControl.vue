<template>
<div class="favorite__control__wrapper" @click="toggleFavorite(contact)">
    <HeartFull v-if="contact.favorite" />
    <HeartEmpty v-else />
</div>
</template>

<script>
import HeartEmpty from '@/assets/svg/HeartEmpty'
import HeartFull from '@/assets/svg/HeartFull'
export default {
    name: 'FavoriteControl',
    components: {
        HeartEmpty,
        HeartFull
    },
    props: {
        contact: {
            type: Object,
            required: true
        }
    },
    methods: {
        toggleFavorite(contact){
            console.log('toggle')
            console.log(contact)
        }
    }
}
</script>

<style lang="scss">

</style>