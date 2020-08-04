<template>
<div class="edit__input">
    <Input
        :type="type"
        @input="grabInput($event)"
        @invalid="$emit('invalid',$event)"
        :value="value"
        :placeholder="placeholder"
    />
</div>
</template>

<script>
import Input from '@/components/materials/Input'


export default {
    name: 'EditInput',
    props: {
        value: {
            type: String,
            required: false
        },
        placeholder: {
            type: String,
            require: false
        },
        type: {
            type: Object,
            required: true,
        },
    },
    components: {
        Input
    },
    methods: {
        grabInput(value){
            this.$emit('input', value)
        }
    }
}
</script>

<style lang="scss">
.edit__input {
    position: relative;

    input{
        font-family: 'Lato';
        font-size: 14px;
        box-sizing: border-box;
        height: 60px;
        width: 100%;
        border: 1px solid $search-input-border-color;
        border-radius: 4px;
        background-color: $background-color;

        &::placeholder{
            opacity: 0.5;
        }

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
        position: absolute;
        text-align: left;
        opacity: 0.7;
        font-size: 14px;
    }
}
</style>