<template>
    <button class="wide__button" @click="$emit('btn-click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'WideButton',
}
</script>

<style lang="scss">
.wide__button{
    height: 42px;
    width: 160px;
    color: $background-color;
    background-color: $text-color;
    outline: 0;
    border-radius: 29px;
    border-width: 0;
    padding: 0;
    cursor: pointer;
}
</style>