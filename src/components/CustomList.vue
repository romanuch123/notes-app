<template>
  <ul v-if="listLength" class="list">
    <slot></slot>
  </ul>
  <span v-else>List is empty...</span>
</template>

<script>

export default {
  name: 'CustomList',
  props: {
    listLength: {
      type: Number,
      default: 0,
    },
  },
  components: {
  },
};
</script>

<style lang="scss" scoped>
</style>
