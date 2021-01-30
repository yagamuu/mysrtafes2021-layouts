<template>
  <canvas
    width="1920"
    height="1080"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ClipPath } from '@/types/ClipPath';

@Component
export default class ClipCanvas extends Vue {
  @Prop(Array)
  readonly clipPaths!: ClipPath[];

  ctx?: CanvasRenderingContext2D;
  mounted(): void {
    const element = this.$el as HTMLCanvasElement;
    const ctx = element.getContext('2d');
    if (ctx) {
      this.ctx = ctx;
    }
    this.draw();
  }
  draw(): void {
    if (!this.ctx) {
      return;
    }
    this.ctx.fillStyle = '#254678';
    this.ctx.fillRect(0, 0, 1920, 1080);
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
