<template>
    <button 
        class="wide__button" 
        :class="[ active && !invalid ? 'active' : '', invalid ? 'invalid' : '', loading ? 'loading' : '']"
        @click="interceptClick"

    >
        <div class="wide_button__text" v-if="!loading">
            <slot></slot>
        </div>
        <Spinner v-else/>
        
    </button>
</template>

<script>
import Spinner from '@/components/materials/Spinner'
export default {
    name: 'WideButton',
    components: {
        Spinner,
    },
    props: {
        active: {
            required: false,
            default: false,
        },
        loading:{
            required: false,
            default: false,
        },
        invalid: {
            require: false,
            default: false,
        }
    },
    methods: {
        interceptClick(){
            if(!this.loading){
                this.$emit('btn-click')
            } 
        }
    }
}
</script>

<style lang="scss">
.wide__button{
    height: 42px;
    max-height: 42px;
    width: 160px;
    color: $background-color;
    background-color: $text-color;
    outline: 0;
    border-radius: 29px;
    border-width: 0;
    padding: 0;
    cursor: pointer;

    &.active{
        background-color: $main-color;
    }

    &.invalid{
        pointer-events: none;
        background-color: $text-color;
    }
    
    &.loading{
        pointer-events: none;
    }
}
</style>