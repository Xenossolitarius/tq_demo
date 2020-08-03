<template>
  <div class="contacts">
    <SearchInput @input="grabInput($event)"/>
    <ContactList :contacts="filtered"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchInput from '@/components/contacts/SearchInput'
import ContactList from '@/components/contacts/ContactList'
export default {
  name: "Contacts",
  computed:{
    ...mapGetters(['filterContacts']),
    filtered(){
      return this.filterContacts(this.filter)
    }
  },
  data(){
    return {
      filter: {
        nameFull: undefined,
        routeFilter: undefined
      },
    }
  },
  components: {
    SearchInput,
    ContactList
  },
  methods: {
    grabInput(value){
      this.filter.nameFull = value
    },
    grabRoute(){
      this.filter.routeFilter = this.$route.params.filter
    }
  },
  created(){
    this.grabRoute()
  },
  watch: {
    $route(){
      this.grabRoute()
    }
  }
}
</script>

<style lang="scss">
.contacts{
  padding-top: 58px;

  @media #{$mq-mobile} {
    padding-top: 23px;
  }
}

</style>