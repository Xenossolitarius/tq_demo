<template>
<fragment>
  <header>
      <router-link :to="'/'">
        <Logo/>
      </router-link>
  </header>
  <div class="mobile-padding"></div>
</fragment>
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
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
        position: fixed;
        z-index: 1;
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
.mobile-padding{
    @media #{$mq-mobile} {
        padding-top: 50px;
    }
}
</style>