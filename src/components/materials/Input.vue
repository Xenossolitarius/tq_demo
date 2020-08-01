<template>
<fragment>
    <input 
        type="text"
        class="tq-input"
        v-model.trim="text"
        @input="setText($event.target.value)"
    >
    <div class="error" v-if="!$v.text.required">
        {{this.$options.validation_messages.REQUIRED()}}
    </div>
    <div class="error" v-if="!$v.text.minLength">
        {{this.$options.validation_messages.MINLENGTH(this.type.NAME,this.type.LENGTH)}}
    </div>
</fragment>
</template>

<script>
import { validation_messages } from '@/enums/input_validations.js'

export default {
    name: "Input",
    props: {
        type: {
            type: Object,
            required: true,
        }
    },
    validation_messages,
    data(){
        return {
            text: ''
        }
    },
    validations() {
        return {
            text: this.type.VALIDATORS
        }
    },
    methods: {
        setText(value){
            this.text = value
            this.$v.text.$touch()
            this.$emit('input', value)
        }
    },
    watch: {
        '$v.text.$error': function emitError(value){
            if(value){
                this.$emit('onError')
            }
        }
    }
}
</script>

<style lang="scss">
.tq-input {
    padding-left: 30px;
    outline: 0;
    border: 0;
    width: 80%;
    font-size: 17px;
    color: $text-color;
    caret-color: $main-color;
    @media #{$mq-mobile} {
        font-size: 14px;
    }

    &::placeholder {
        color: $text-color;
        opacity: 0.5;
    }
    
}
</style>