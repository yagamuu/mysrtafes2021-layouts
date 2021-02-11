<template>
  <div class="spotifyTrack" :style="position">
    <one-line-text-block
      :fontSize="21"
      :text="trackName"
      :width="width"
      align="left"/>
    <one-line-text-block
      :fontSize="21"
      :text="artists"
      :width="width"
      align="left"/>
    <one-line-text-block
      :fontSize="21"
      text="Stream Palette"
      :width="width"
      align="left"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ComponentPosition } from '@/types/ComponentPosition';
import type { SpotifyPlayingTrack } from '@/types/schemas/nodecgSpotifyWidget';
import OneLineTextBlock from './OneLineTextBlock.vue';

@Component({
  components: {
    OneLineTextBlock,
  },
})
export default class SpotifyTrack extends Vue {
  @Prop({ type: Object, required: true })
  readonly position!: ComponentPosition;

  @Prop({ type: Object, required: true })
  readonly track!: SpotifyPlayingTrack;

  @Prop({ type: Number, default: 525 })
  readonly width!: number;

  get trackName(): string {
    if (!this.track) {
      return '';
    }
    return this.track?.name || '';
  }
  get artists(): string {
    return this.track?.artists.join(', ') || '';
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/setupLayout.scss';

.spotifyTrack {
  @include baseCompornent();
  justify-content: space-between;
  flex-direction: column;
  font-family: "mplus-1c-medium";
}
</style>
