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
        height: 20px;
        margin-top: 19px;

        @media #{$mq-mobile} {
            width: 150px;
            height: 17px;
            margin-top: 15px;
        }
    }
}
</style>