<template>
  <transition :name="transitionName" mode="out-in" appear>

    <slot></slot>
    
  </transition>
</template>

<script>
export default {
  name: 'PageTransition',
  props: {
      path: {
          required: false,
          type: Boolean,
          default: false
      },
      reverse: {
        required: false,
        type: Boolean,
        default: false
      }
  },
  data(){
      return {
        transitionName: 'fade'
      }
  },
  watch: {
    '$route' (to, from) {
        let toDepth
        let fromDepth

        if(this.path){
            toDepth = to.path.length
            fromDepth = from.path.length
        }else{
            toDepth = to.path.split('/').length
            fromDepth = from.path.split('/').length
        }

        if(this.reverse){
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }else{
            this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
        }
    }
  }
};
</script>
<style lang="scss">
$position: 200px;

.fade-enter-active, .fade-leave-active {
    transition-duration: $glob-trans-duration;
    transition-property: opacity;
    transition-timing-function: $glob-trans-type;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.slide-right-enter-active, .slide-right-leave-active {
    transition-duration: $glob-trans-duration;
    transition-property: transform,opacity;
    transition-timing-function: $glob-trans-type;
}

.slide-right-enter{
    transform: translateX(-$position);
    opacity: 0;
}

.slide-right-leave-to {
    transform: translateX($position);
    opacity: 0;
}

.slide-left-enter-active, .slide-left-leave-active {
    transition-duration: $glob-trans-duration;
    transition-property: transform,opacity;
    transition-timing-function: $glob-trans-type;
}

.slide-left-enter{
    transform: translateX($position);
    opacity: 0;
}

.slide-left-leave-to {
    transform: translateX(-$position);
    opacity: 0;
}
</style>