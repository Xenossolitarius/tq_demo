<template>
  <div id="app">
    <Header/>
    <PageTransition>
      <div :key="$route.name" v-if="!loading">
        <router-view />
      </div>	
    </PageTransition>
    <ModalHandler v-if="currentModal !== $options.modal_types.OFF"/>
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import modal_types from '@/enums/modal_types.js'
import Header from '@/components/Header'
import ModalHandler from '@/components/overlays/ModalHandler'
import PageTransition from '@/components/transitions/PageTransition'
export default {
  name: 'App',
  modal_types,
  components: {
    Header,
    ModalHandler,
    PageTransition,
  },
  computed: {
    ...mapGetters(['currentModal']),
  },
  methods: {
    ...mapActions(['fetchContacts'])
  },
  async mounted(){
    await this.fetchContacts()
    this.loading = false
  },
  data(){
    return {
      loading: true,
    }
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
  overflow: hidden;
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
