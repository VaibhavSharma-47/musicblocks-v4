<template>
  <ToolbarAuxiliaryBox />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import ToolbarAuxiliaryBox from '@/view/components/ToolbarAuxiliaryBox.vue';

@Options({
  components: {
    ToolbarAuxiliaryBox,
  },
})
export default class extends Vue {}
</script>

<style lang="scss">
</style>
