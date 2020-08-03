<template>
  <transition name="help-modal" @before-enter="preventScroll" @after-leave="allowScroll" appear>

    <slot></slot>

  </transition>
</template>

<script>
export default {
  name: 'ModalControlTran',
  className: 'help-modal-open',
  methods: {
    preventScroll(){
      document.body.classList.add(this.$options.className)
    },
    allowScroll(){
      document.body.classList.remove(this.$options.className)
    },
  }
};
</script>

<style lang="scss">
.help-modal-open{
  overflow: hidden;
  padding-right: 17px;
    @media #{$mq-mobile} {
        padding-right: 0px;
    }
}
.help-modal-enter-active, .help-modal-leave-active {
   transition-duration: 0.35s;
   transition-property: background-color;
   transition-timing-function: ease-out;
}
.help-modal-enter, .help-modal-leave-to {
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>