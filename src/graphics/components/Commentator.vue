<template>
  <div class="commentator" :style="position" ref="parent">
    <div class="icon">
      <img src="../images/icon/mic_white.png" height="44px">
    </div>
    <div class="nameParent">
      <one-line-text-block
        v-for=" commentator in commentators"
        :key="commentator.name"
        :fontSize="38"
        :text="commentator.name"
        :width="306"
        style="padding:10px 0;"
        />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { ComponentPosition } from '@/types/ComponentPosition';
import type { Commentators } from '@/types/Commentators';
import OneLineTextBlock from './OneLineTextBlock.vue';

@Component({
  components: {
    OneLineTextBlock,
  },
})
export default class Commentator extends Vue {
  @Prop({ type: Object, required: true })
  readonly position!: ComponentPosition;

  @Prop({ type: Array, required: true })
  readonly commentators!: Commentators;

  @Prop({ type: Number, default: 38 })
  readonly fontSize!: number;

  fontSizeModifier = 1;

  @Watch('text')
  onChangeText(): void {
    this.fontSizeModifier = 1;
  }

  mounted(): void {
    this.adjustmentFontSize();
  }

  updated(): void {
    this.adjustmentFontSize();
  }

  adjustmentFontSize(): void {
    const parentDom: any = this.$refs.parent;
    const textDom: any = this.$refs.text;

    if (!parentDom || !textDom) return;

    const parentHeight = parentDom.clientHeight;
    const textHeight = textDom.clientHeight;

    if (parentHeight < textHeight && this.fontSizeModifier >= 0.1) {
      this.fontSizeModifier *= 0.95;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/gameLayout.scss';

.commentator {
  @include runInformationCompornent();
  color: #FFFFFF;
  font-family: "mplus-1c-medium";
}

.icon {
  padding: 20px;
}
</style>
