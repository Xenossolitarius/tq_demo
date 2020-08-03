<template>
  <transition name="modal" mode='out-in' appear>

    <slot></slot>

  </transition>
</template>

<script>
export default {
  name: 'MessageContainerTran',
};
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: all 0.35s ease-out;
}
.modal-enter, .modal-leave-to {
  transform: translate3d(0,0,0) translateY(-150px);
  opacity: 0;
}
.modal-leave-to{
  transform: translate3d(0,0,0) translateY(150px);
  opacity: 0;
}
</style>