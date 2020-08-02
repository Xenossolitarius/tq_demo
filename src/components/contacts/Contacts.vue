<template>
  <div class="contacts">
    <SearchInput @input="filterEvent($event)"/>
    <ContactList :contacts="filteredContacts"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchInput from '@/components/contacts/SearchInput'
import ContactList from '@/components/contacts/ContactList'
export default {
  name: "Contacts",
  computed:{
    ...mapGetters(['getContacts','filterContacts'])
  },
  data(){
    return {
      filter: {
        nameFull: undefined,
        routeFilter: undefined
      },
      filteredContacts: []
    }
  },
  components: {
    SearchInput,
    ContactList
  },
  methods: {
    filterEvent(inputValue){
      this.filter.nameFull = inputValue
      this.filter.routeFilter = this.$route.params.filter
      this.filteredContacts = this.filterContacts(this.filter)
    }
  },
  created(){
    this.filterEvent()
  },
  watch: {
    $route(){
      this.filterEvent()
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