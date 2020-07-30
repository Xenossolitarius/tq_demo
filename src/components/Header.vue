<template>
  <header>
      <Logo/>
  </header>
</template>

<script>
import Logo from '../assets/svg/Logo'
export default {
    name: 'Header',
    components: {
        Logo,
    }
}
</script>

<style lang="scss">
header{
    position: relative;
    width: 100%;
    height: 60px;
    background-color: $main-color;
    @include gradient($gradient-direction, $gradient-list);

    @media #{$mq-mobile} {
        height: 50px;
    }

    &:after{
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        height: 7px;
        width: 100%;
        opacity: 0.3;
        background-color: $background-color;
    }

    .tq-logo{
        width: 180px;
        height: calc(100% / 3);
        margin-top: 19px;

        @media #{$mq-mobile} {
            margin-top: 15px;
        }
    }

}
</style>