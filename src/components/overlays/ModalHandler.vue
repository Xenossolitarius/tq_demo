<template>
<ModalControlTran>
<div class="modal-overlay" @click.self="closeModal()">
    <ModalControlInnerTran>
        <div 
            class="control-modal" 
            v-if="modalOpen" 
            @click.self="closeModal()"
            >
            <component :is="controlModal"
                       v-on:close-modal="closeModal()"/>
        </div>
    </ModalControlInnerTran>
</div>
</ModalControlTran>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import modal_types from '@/enums/modal_types.js'
const ModalControlInnerTran = () => import(/* webpackChunkName: "modal" */ './transitions/ModalControlInnerTran')
const ModalControlTran = () => import(/* webpackChunkName: "modal" */ './transitions/ModalControlTran')
const DeleteModal = () => import(/*webpackChunkName: "modal" */ './DeleteModal')
const LoadModal = () => import(/*webpackChunkName: "modal" */ './LoadModal')

export default {
    name: 'ModalControl',
    modal_types,
    components: {
        ModalControlInnerTran,
        ModalControlTran,
        DeleteModal,
        LoadModal
    },
    data(){
        return{
            controlModal: null,
            modalOpen: true,
        }
    },
    created(){
        const { modal_types } = this.$options

        switch(this.currentModal){
            case modal_types.DELETE:
                this.controlModal = DeleteModal
                break
            case modal_types.LOAD:
                this.controlModal = LoadModal
                break
            default:
                this.closeModal()
        }
    },
    computed: {
        ...mapGetters(['currentModal'])
    },
    methods: {
        ...mapActions(['setCurrentModal']),
        closeModal(){
            this.modalOpen = false
            setTimeout(()=>{
                this.setCurrentModal(null)
            },350) 
        },
    },
}
</script>

<style lang="scss">
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 888;
    overflow-y: scroll;

    .control-modal{
        margin: 0 auto;
        display: flex;
        align-items: center;
        width: 1080px;
        min-height: 100%;
        will-change: transform;
        backface-visibility: hidden;
        perspective: 1000px;
        transform: translate3d(0,0,0);
    }

}

</style>
