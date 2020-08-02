<template>
<div class="edit__input">
    <Input
        :type="$options.input_types.SEARCH"
        @input="grabInput($event)"
        @onError="doError()"
        :initalValue="initalValue"
        
    />
</div>
</template>

<script>
import Input from '@/components/materials/Input'
import { input_types } from '@/enums/input_validations.js'

export default {
    name: 'EditInput',
    props: {
        initalValue: {
            type: String,
            required: false
        }
    },
    components: {
        Input
    },
    input_types,
    methods: {
        grabInput(value){
            this.$emit('input', value)
        },
        doError(){
            console.log('there is error')
        }
    }
}
</script>

<style lang="scss">
.edit__input {
    input{
        height: 60px;
        width: 300px;
        border: 1px solid $search-input-border-color;
        border-radius: 4px;
        background-color: $background-color;
        display: flex;
        align-items: center;

        &:hover{
            border: 1px solid $main-color;
        }

        &:active{
            border: 1px solid $main-color;
        }

        &:focus{
            border: 1px solid $main-color;
        }

        @media #{$mq-mobile} {
            height: 50px;
            width: auto;
            margin: 0 25px;
        }
    }

    .error{
        text-align: left;
    }
}
</style>