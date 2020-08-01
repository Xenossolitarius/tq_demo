<template>
  <div class="contacts">
    <SearchInput/>
  </div>
</template>

<script>
import SearchInput from '@/components/contact/SearchInput'
export default {
    name: "Contacts",
    components: {
      SearchInput
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