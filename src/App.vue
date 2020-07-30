<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
}

#app {
  font-family: 'Lato';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $background-color;
  color: $text-color;
}

a{
  color: $text-color;

  &:visited{
    color: $text-color;
  }

  &.router-link-exact-active {
    color: $main-color;
  }
}
</style>
