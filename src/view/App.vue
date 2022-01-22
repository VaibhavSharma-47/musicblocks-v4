<!-- == TEMPLATE =============================================================================== -->

<template>
  <Toolbars />
</template>

<!-- == SCRIPT ================================================================================= -->

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Toolbars from '@/view/components/Toolbars.vue';

@Options({
  components: {
    Toolbars,
  },
})
export default class App extends Vue {}
</script>

<!-- == STYLE ================================================================================== -->

<style lang="scss">
body {
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  * {
    box-sizing: border-box;
  }
}
</style>
