<template>
  <EnterUsers v-if="currentView == 'enterUsers'"></EnterUsers>
</template>

<script>

import EnterUsers from './components/EnterUsers.vue'
export default {
  components: {
    EnterUsers: EnterUsers
  },
  computed: {
    currentView() {
      return this.$store.state.currentView
    }
  }
}
</script>

<style lang="css">
</style>
