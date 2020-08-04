<template>
<div class="favorite__control__wrapper" @click.stop="toggle(contact)">
    <Spinner :dark="true" v-if="loading" />
    <HeartFull v-else-if="contact.favorite" />
    <HeartEmpty v-else />
    
</div>
</template>

<script>
import {mapActions} from 'vuex'
import HeartEmpty from '@/assets/svg/HeartEmpty'
import HeartFull from '@/assets/svg/HeartFull'
import Spinner from '@/components/materials/Spinner'
export default {
    name: 'FavoriteControl',
    components: {
        HeartEmpty,
        HeartFull,
        Spinner
    },
    props: {
        contact: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            loading: false,
        }
    },
    methods: {
        ...mapActions(['toggleFavorite']),
        async toggle(contact){
            this.loading = true
            await this.toggleFavorite(contact)
            this.loading = false
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