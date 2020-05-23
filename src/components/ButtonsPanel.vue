<template>
  <div class="buttons-panel">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'ButtonsPanel',
  components: {
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.buttons-panel {
  height: 50px;
  width: 100vw;
  background: #d5d5d5;
  position: fixed;
  bottom: 0;
  left: 0;
  @include flex-vertical-center(center);
  button {
    margin: 0 5px;
  }
}
</style>
