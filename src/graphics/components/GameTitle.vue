<template>
  <div class="gameTitle" :style="position">
      <slot/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ComponentPosition } from '@/types/ComponentPosition';

@Component
export default class GameTitle extends Vue {
  @Prop({ type: Object, required: true })
  readonly position!: ComponentPosition;
}
</script>

<style lang="scss">
@import '../styles/gameLayout.scss';

.gameTitle {
  @include runInformationCompornent();
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 38px;
}
</style>
