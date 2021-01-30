<template>
  <div id="root">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class OverlayBase extends Vue {
  created(): void {}
}
</script>

<style>
  @import url('../styles/common.css');
</style>
