<template>
  <div class="runInformation" :style="position">
    <span class="label">予定タイム</span>
    <span class="estimate">{{estimate}}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ComponentPosition } from '@/types/ComponentPosition';
import * as util from '@/util';

@Component
export default class Estimate extends Vue {
  @Prop({ type: Object, required: true })
  readonly position!: ComponentPosition;

  @Prop({ type: Number, required: true })
  readonly estimateS!: number;

  get estimate(): string {
    return util.formatSeconds(this.estimateS);
  }
}
</script>

<style lang="scss">
@import '../styles/gameLayout.scss';

.runInformation {
  @include runInformationCompornent();
  justify-content: center;
  align-items: center;
}

.label {
  padding-right: 10px;
}
</style>
