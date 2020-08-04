<template>
<fragment>
    <input 
        type="text"
        class="tq-input"
        v-model.trim="text"
        @input="setText($event.target.value)"
        :placeholder="placeholder"
    >
    <div class="error" v-if="$v.text.required === false && isError">
        {{$options.validation_messages.REQUIRED()}}
    </div>
    <div class="error" v-else-if="$v.text.minLength === false && isError">
        {{$options.validation_messages.MINLENGTH(this.type.NAME,$v.text.$params.minLength.min)}}
    </div>
    <div class="error" v-else-if="$v.text.email === false && isError">
        {{$options.validation_messages.EMAIL()}}
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
        },
        value: {
            type: String,
            required: false
        },
        placeholder: {
            type: String,
            require: false
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
    computed: {
        isError(){
            return this.$v.text.$error
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
        '$v.text.$invalid': function (value){    
            this.$emit('invalid',value)
        }
    },
    created(){
        if(this.value){
            this.text = this.value
        }
    },
    mounted(){
        this.$emit('invalid', this.$v.text.$invalid)
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