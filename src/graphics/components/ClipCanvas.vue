<template>
  <canvas
    width="1920"
    height="1080"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ClipPath } from '@/types/ClipPath';
import background from '../images/gameLayout/background.png';

@Component
export default class ClipCanvas extends Vue {
  @Prop(Array)
  readonly clipPaths!: ClipPath[];

  ctx?: CanvasRenderingContext2D;
  backgroundImage = background;

  mounted(): void {
    const element = this.$el as HTMLCanvasElement;
    const ctx = element.getContext('2d');
    if (ctx) {
      this.ctx = ctx;
    }
    const bg = new Image();
    bg.src = this.backgroundImage;
    bg.addEventListener('load', () => {
      this.draw(bg);
    });
  }
  draw(bg: HTMLImageElement): void {
    if (!this.ctx) {
      return;
    }
    this.ctx.drawImage(bg, 0, 0);
    this.ctx.globalCompositeOperation = 'xor';
    this.clipPaths?.forEach((clipPath) => {
      this.ctx?.fillRect(
        clipPath.x,
        clipPath.y,
        clipPath.width,
        clipPath.height,
      );
    });
  }
}
</script>
