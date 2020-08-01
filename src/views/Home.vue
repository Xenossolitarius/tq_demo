<template>
  <fragment>
    <Navigation/>
    <Contacts/>
  </fragment>
</template>

<script>
import Navigation from '@/components/Navigation'
import Contacts from '@/components/contact/Contacts'

export default {
  name: 'Home',
  components: {
    Navigation,
    Contacts,
  }
}
</script>
