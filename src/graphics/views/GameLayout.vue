<template>
  <overlay-base>
    <div id="container">
      <slot/>
      <div>
        <div v-for="(clipPath, index) in clipPaths" :key="index">
          <div class="gameBorder"
           v-if="gameBorder"
           :style="{
             top: clipPath.y - 5 + 'px',
             left: clipPath.x - 5 + 'px',
             width: clipPath.width + 'px',
             height: clipPath.height + 'px'
            }"/>
        </div>
      </div>
    </div>
    <clip-canvas :clipPaths="clipPaths"/>
  </overlay-base>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ClipPath } from '@/types/ClipPath';
import { storeModule } from '@/store/gameLayoutStore';
import OverlayBase from './OverlayBase.vue';
import ClipCanvas from '../components/ClipCanvas.vue';

@Component({
  components: {
    OverlayBase,
    ClipCanvas,
  },
})
export default class GameLayout extends Vue {
  @Prop(Array)
  readonly clipPaths!: ClipPath[];

  @Prop({ type: Boolean, default: true })
  readonly gameBorder!: boolean;

  created(): void {
    setInterval(() => {
      storeModule.nextSocial();
    }, 15000);
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/gameLayout.scss';

.gameBorder {
  @include borderElement();
}
</style>
