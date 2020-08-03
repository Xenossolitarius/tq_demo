<template>
  <TrashIcon @click="openModal()" />
</template>

<script>
import modal_types from '@/enums/modal_types.js'
import {mapActions} from 'vuex'
import TrashIcon from '@/assets/svg/TrashIcon'
export default {
    name: 'DeleteControl',
    modal_types,
    props: {
        contact: {
            type: Object,
            required: true
        }
    },
    components: {
        TrashIcon,
    },
    methods: {
        ...mapActions(['setCurrentModal','setGlobalContact']),
        openModal(){
            this.setCurrentModal(this.$options.modal_types.DELETE)
            this.setGlobalContact(this.contact)
        }
    }
}
</script>

<style lang="scss">
.trash-icon{
    cursor: pointer;
}
</style>