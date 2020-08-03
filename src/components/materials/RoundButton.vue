<template>
    <button class="round__button" @click="$emit('btn-click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "RoundButton",
}
</script>

<style lang="scss">
.round__button{
    height: 30px;
    width: 30px;
    color: $text-color;
    border: 1px solid $search-input-border-color;
    background-color: $background-color;
    outline: 0;
    border-radius: 50%;
    padding: 0;
    cursor: pointer;
}
</style>