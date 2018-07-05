<template>
  <div class="app">
    <EnterUsers v-if="currentView == 'enterUsers'"></EnterUsers>
    <OrderedItems v-if="currentView == 'orderedItems'"></OrderedItems>
  </div>
</template>

<script>

import EnterUsers from './components/EnterUsers.vue'
import OrderedItems from './components/OrderedItems.vue'

export default {
  components: {
    EnterUsers: EnterUsers,
    OrderedItems: OrderedItems
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
