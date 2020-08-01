<template>
<div class="contacts__search">
    <SearchIcon/>
    <Input
        :type="$options.input_types.SEARCH"
        aria-label="search"
        @input="grabInput($event)"
        @onError="doError()"
        
    />
</div>
</template>

<script>
import SearchIcon from '@/assets/svg/SearchIcon'
import Input from '@/components/materials/Input'

import { input_types } from '@/enums/input_validations.js'

export default {
    name: 'SearchInput',
    components: {
        SearchIcon,
        Input
    },
    input_types,
    data(){
        return {
            text: ''
        }
    },
    methods: {
        grabInput(value){
            this.text = value
        },
        doError(){
            console.log('there is error')
        }
    }
}
</script>

<style lang="scss">
.contacts__search {
    height: 60px;
    width: 540px;
    border: 1px solid $search-input-border-color;
    border-radius: 4px;
    background-color: $background-color;
    box-shadow: 0 2px 34px 0 $search-input-bs-color;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media #{$mq-mobile} {
        height: 50px;
        width: auto;
        margin: 0 25px;
    }

    .search__icon {
        margin-left: 23px;
    }
}
</style>