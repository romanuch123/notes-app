<template>
  <header class="app-header">
    <nav class="app-header__nav">
      <router-link to="/" class="link">
        Home
      </router-link>
      <router-link to="/add" class="btn">
        Add new Note
      </router-link>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'AppHeader',
  components: {
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.app-header {
  padding: 10px 0;
  background: $mainColor;
  color: $white;
  &__nav {
    @include flex-vertical-center(space-between);
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    font-size: 18px;
    a {
      font-weight: bold;
      color: $white;
      text-decoration: none;
      &.link.router-link-exact-active {
        color: #ce0000;
      }
      &.btn {
        border: 3px solid $white;
        border-radius: 50px;
        padding: 10px 20px;
        background: transparent;
        &:hover {
          background: darken($mainColor, 10%);
        }
      }
    }
  }
}
</style>
