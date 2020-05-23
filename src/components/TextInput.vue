<template>
  <div class="text-input">
    <input type="text" name="text-input" class="text-input__field">
    <label @click="inputGetFocus" class="text-input__label">Title</label>
  </div>
</template>

<script>

export default {
  name: 'TextInput',
  components: {
  },
  data() {
    return {

    };
  },
  methods: {
    inputGetFocus() {
      console.log(this.$el.getElementsByTagName('input')[0]);
      this.$el.getElementsByTagName('input')[0].focus();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.text-input {
  width: 80%;
  position: relative;
  margin: 0 auto;
  &__label {
    @include flex-vertical-center(center);
    position: absolute;
    height: 100%;
    left: 10px;
    bottom: 0;
    transition-duration: 0.2s;
    &:hover {
      cursor: text;
    }
  }
  &__field {
    width: 100%;
    border: 1px solid $mainColor;
    border-radius: 8px;
    line-height: 2;
    padding: 5px 10px;
    &:focus + label {
      bottom: calc(50% + 12px);
      font-size: 12px;
      background: $white;
      height: max-content;
      padding: 0 2px;
    }
  }
}
</style>
