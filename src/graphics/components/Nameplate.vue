<template>
  <div class="nameplate" :style="position" ref="nameplate">
    <div class="textParent player" v-if="isPlayer" ref="name">
      <span class="text" :style="{fontSize: 38 * fontSizeModifier.name + 'px'}">{{name}}</span>
    </div>
    <div class="textParent commentator" ref="name" v-else>
      <span class="text" :style="{fontSize: 38 * fontSizeModifier.name + 'px'}">{{name}}</span>
    </div>

    <div class="textParent youtube" ref="social">
      <span class="text" :style="{fontSize: 24 * fontSizeModifier.social + 'px'}">{{social}}</span>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ComponentPosition } from '@/types/ComponentPosition';

@Component
export default class Nameplate extends Vue {
  @Prop({ type: Object, required: true })
  readonly position!: ComponentPosition;

  @Prop({ type: String, required: true })
  readonly name!: string;

  @Prop({ type: String, required: true })
  readonly social!: string;

  @Prop({ type: Boolean, default: true })
  readonly isPlayer!: boolean;

  fontSizeModifier = {
    name: 1,
    social: 1,
  };

  mounted(): void {
    this.adjustmentFontSize();
  }

  updated(): void {
    this.adjustmentFontSize();
  }

  adjustmentFontSize(): void {
    const namePlateDom: any = this.$refs.nameplate;
    const nameDom: any = this.$refs.name;
    const socialDom: any = this.$refs.social;

    const namePlateWidth = namePlateDom.clientWidth;
    const nameWidth = nameDom.clientWidth;
    const socialWidth = socialDom.clientWidth;

    console.log(`namePlate : ${namePlateDom.clientWidth}`);
    console.log(`name : ${nameDom.clientWidth}`);
    console.log(`social : ${socialDom.clientWidth}`);

    if (namePlateWidth < (nameWidth + socialWidth)) {
      console.log('超えてます');
      if (nameWidth > socialWidth && this.fontSizeModifier.name >= 0.1) {
        this.fontSizeModifier.name *= 0.95;
      } else if (this.fontSizeModifier.social >= 0.1) {
        this.fontSizeModifier.social *= 0.95;
      }
    }
  }
}
</script>

<style lang="scss">
@import '../styles/gameLayout.scss';

.nameplate {
  @include runInformationCompornent();
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 38px;
  font-family: 'mplus-1c-medium';
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.textParent {
  padding: 0 20px;
}

.text {
  padding-left: 10px;
  vertical-align: middle;
}

@mixin textBefore($url) {
  content: '';
  display: inline-block;
  width: 44px;
  height: 44px;
  background-image: url($url);
  background-size: contain;
  vertical-align: sub;
}

.commentator:before {
  @include textBefore('../images/icon/mic_white.png');
}

.player:before {
  @include textBefore('../images/icon/controller_white_a.png');
}

.youtube:before {
  @include textBefore('../images/icon/youtube.png');
}
</style>
