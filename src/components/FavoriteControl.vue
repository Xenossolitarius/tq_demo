<template>
<div class="favorite__control__wrapper" @click.stop="toggle(contact)">
    <HeartFull v-if="contact.favorite" />
    <HeartEmpty v-else />
</div>
</template>

<script>
import {mapActions} from 'vuex'
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
        ...mapActions(['toggleFavorite']),
        async toggle(contact){
            console.log('toggle')
            console.log(contact)
            await this.toggleFavorite(contact)
            console.log('done')
        }
    }
}
</script>

<style lang="scss">
.favorite__control__wrapper{
    width: 15px;
    height: 15px;
    cursor: pointer;
}
</style>