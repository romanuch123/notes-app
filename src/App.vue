<template>
  <div id="app">
    <AppHeader />
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
@import './styles/variables.scss';
@import './styles/mixins.scss';

/* RESET */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
// /* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}


body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input:focus, button:focus {
  outline: none;
}
// End reset

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

h1 {
  margin: 10px;
  font-size: 35px;
  font-weight: bold;
  color: $mainColor;
}
h2 {
  margin: 10px;
  font-size: 25px;
  font-weight: bold;
  color: $mainColor;
}
input {
  border: 1px solid $mainColor;
  border-radius: 8px;
  line-height: 2;
  padding: 5px 10px;
}


.list-item {
  @include list-item-style;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10px;
  &__container {
    @include flex-vertical-center(space-between);
  }
}
</style>
