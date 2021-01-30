<template>
  <div class="runInformation" :style="position">
      <slot/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ComponentPosition } from '@/types/ComponentPosition';

@Component
export default class RunInformationOneLine extends Vue {
  @Prop({ type: Object, required: true })
  readonly position!: ComponentPosition;
}
</script>

<style lang="scss">
@import '../styles/gameLayout.scss';

.runInformation {
  @include runInformationCompornent();
  justify-content: center;
  align-items: center;
}
</style>
