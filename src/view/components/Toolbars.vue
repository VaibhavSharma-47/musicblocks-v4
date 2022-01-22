<!-- == TEMPLATE =============================================================================== -->

<template>
  <section
    id="toolbar-main"
    class="toolbar"
  >
    <div
      id="toolbar-main-cluster-a"
      class="toolbar-cluster toolbar-main-cluster"
    >
      <div class="toolbar-cluster-item toolbar-main-cluster-item toolbar-main-cluster-a-item">
        {{ 'A' }}
      </div>
      <div class="toolbar-cluster-item toolbar-main-cluster-item toolbar-main-cluster-a-item">
        {{ 'B' }}
      </div>
      <div class="toolbar-cluster-item toolbar-main-cluster-item toolbar-main-cluster-a-item">
        {{ 'C' }}
      </div>
    </div>
    <div
      id="toolbar-main-cluster-b"
      class="toolbar-cluster toolbar-main-cluster"
    >
      <div class="toolbar-cluster-item toolbar-main-cluster-item toolbar-main-cluster-b-item">
        {{ 'A' }}
      </div>
      <div class="toolbar-cluster-item toolbar-main-cluster-item toolbar-main-cluster-b-item">
        {{ 'B' }}
      </div>
      <div class="toolbar-cluster-item toolbar-main-cluster-item toolbar-main-cluster-b-item">
        {{ 'C' }}
      </div>
    </div>
  </section>
  <section
    id="toolbar-auxiliary"
    class="toolbar"
  >
    <div
      id="toolbar-auxiliary-cluster-a"
      class="toolbar-cluster toolbar-auxiliary-cluster"
    >
    </div>
    <div
      id="toolbar-auxiliary-cluster-b"
      className="toolbar-cluster toolbar-auxiliary-cluster"
    >
    </div>
  </section>
</template>

<!-- == SCRIPT ================================================================================= -->

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class HelloWorld extends Vue {}
</script>

<!-- == STYLE ================================================================================== -->

<style lang="scss">
@import '@/view/scss/values.scss';
@import '@/view/scss/colors.scss';

$padding: 0.25rem;
$cluster-spacing: 0.25rem;
$item-spacing: 0.5rem;

$item-width-main: 3rem;

.toolbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: $padding;

  .toolbar-cluster {
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: $cluster-spacing 0;

    .toolbar-cluster-item {
      margin-top: $item-spacing;
      padding: $toolbar-item-padding;
      border: 1px solid $border-light-grey;
      border-radius: $border-radius-rounded-box;

      &:first-child {
        margin-top: 0;
      }
    }
  }
}

#toolbar-main {
  .toolbar-main-cluster {
    .toolbar-main-cluster-item {
      width: $item-width-main;
    }
  }

  #toolbar-main-cluster-a {
    .toolbar-main-cluster-a-item {
      display: block;
    }
  }

  #toolbar-main-cluster-b {
    height: 100%;
    justify-content: flex-end;

    .toolbar-main-cluster-b-item {
      display: block;
    }
  }
}

#toolbar-auxiliary {
  .toolbar-auxiliary-cluster {
    align-items: flex-end;

    .toolbar-auxiliary-cluster-item {
      display: block;
    }
  }

  #toolbar-auxiliary-cluster-a {
    height: 100%;

    .toolbar-auxiliary-cluster-a-item {
      display: block;
    }
  }

  #toolbar-auxiliary-cluster-b {
    justify-content: flex-end;

    .toolbar-auxiliary-cluster-b-item {
      display: block;
    }
  }
}
</style>
