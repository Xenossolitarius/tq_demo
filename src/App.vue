<template>
  <div id="app">
    <Header/>
    <router-view/>
    <ModalHandler v-if="currentModal !== $options.modal_types.OFF"/>
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import modal_types from '@/enums/modal_types.js'
import Header from '@/components/Header'
import ModalHandler from '@/components/overlays/ModalHandler'
export default {
  name: 'App',
  modal_types,
  components: {
    Header,
    ModalHandler,
  },
  computed: {
    ...mapGetters(['currentModal']),
  },
  methods: {
    ...mapActions(['fetchContacts'])
  },
  async mounted(){
    let works = await this.fetchContacts()
    console.log('Mounted')
    console.log(works)
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  font-family: 'Lato';
}

*{
  font-family: 'Lato';
}

#app {
  font-family: 'Lato';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $background-color;
  color: $text-color;
  position: relative;
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
