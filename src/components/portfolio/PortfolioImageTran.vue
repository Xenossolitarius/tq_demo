<template>
    <transition name="image-tran" mode="out-in" appear>
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: 'PortfolioImageTran',
}
</script>

<style lang="scss">

.image-tran-enter-active, .image-tran-leave-active {
    transition-duration: $glob-trans-duration;
    transition-property: opacity,transform;
    transition-timing-function: ease-out;
}

.image-tran-enter, .image-tran-leave-to {
    @media #{$mq-mobile} {
        opacity: 0;
    }
}
</style>