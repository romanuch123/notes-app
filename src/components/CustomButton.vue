<template>
  <button
    type="button"
    class="custom-btn"
    @click.stop="clickHandler"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>

export default {
  name: 'CustomButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickHandler() {
      this.$emit('click-handler');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.custom-btn {
  min-width: 40px;
  color: $white;
  border: none;
  border-radius: 8px;
  line-height: 2;
  padding: 5px 10px;
  background: $mainColor;
  &:hover {
    cursor: pointer;
    background: darken($mainColor, 10%);
  }
  &:disabled {
    background: $btnDisabledColor;
    &:hover {
      cursor: not-allowed;
    }
  }
}
</style>
