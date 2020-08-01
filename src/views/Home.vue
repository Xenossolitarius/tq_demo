<template>
  <fragment>
    <Navigation/>
    <Contacts/>
  </fragment>
</template>

<script>
import Navigation from '@/components/Navigation'
import Contacts from '@/components/contacts/Contacts'

export default {
  name: 'Home',
  components: {
    Navigation,
    Contacts,
  }
}
</script>
