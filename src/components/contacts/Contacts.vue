<template>
  <div class="contacts">
    <SearchInput/>
    <ContactList/>
  </div>
</template>

<script>
import SearchInput from '@/components/contacts/SearchInput'
import ContactList from '@/components/contacts/ContactList'
export default {
  name: "Contacts",
  components: {
    SearchInput,
    ContactList
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