<template>
  <div class="nameplate" :style="position" ref="nameplate">
    <div :class="nameElementClass" ref="name">
      <img src="../images/icon/controller_white_a.png" height="44px" v-if="isPlayer">
      <img src="../images/icon/mic_white.png" height="44px" v-else>
      <span class="text" :style="{fontSize: 38 * fontSizeModifier.name + 'px'}">{{name}}</span>
    </div>

    <div>
    <transition name="social" mode="out-in">
      <div
        class="textParent social"
        ref="social"
        v-if="displaySocial === socialOrder.twitter && social.twitter"
        key="twitter"
      >
        <img src="../images/icon/twitter_white.png" height="44px">
        <span class="text" :style="{fontSize: 24 * fontSizeModifier.social + 'px'}">
          {{social.twitter}}
        </span>
      </div>
      <div
        class="textParent social"
        ref="social"
        v-else-if="displaySocial === socialOrder.twitch && social.twitch"
        key="twitch"
      >
        <img src="../images/icon/twitch.png" height="44px">
        <span class="text" :style="{fontSize: 24 * fontSizeModifier.social + 'px'}">
          {{social.twitch}}
        </span>
      </div>
      <div
        class="textParent social"
        ref="social"
        v-else-if="displaySocial === socialOrder.youtube && social.youtube"
        key="youtube"
      >
        <img src="../images/icon/youtube.png" height="44px">
        <span class="text" :style="{fontSize: 24 * fontSizeModifier.social + 'px'}">
          {{social.youtube}}
        </span>
      </div>
      <div
        class="textParent social"
        ref="social"
        v-else-if="displaySocial === socialOrder.nico && social.nico"
        key="nico"
      >
        <img src="../images/icon/nico.png" height="44px">
        <span class="text" :style="{fontSize: 24 * fontSizeModifier.social + 'px'}">
          {{social.nico}}
        </span>
      </div>
      <div
        class="textParent social"
        ref="social"
        v-else
        key="blank"
      >
        <span class="text" :style="{fontSize: 24 * fontSizeModifier.social + 'px'}"/>
      </div>
    </transition>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { ComponentPosition } from '@/types/ComponentPosition';
import { Social } from '@/types/Social';
import * as util from '../util';

@Component
export default class Nameplate extends Vue {
  @Prop({ type: Object, required: true })
  readonly position!: ComponentPosition;

  @Prop({ type: String, required: true })
  readonly name!: string;

  @Prop({ type: Object, required: true })
  readonly social!: Social;

  @Prop({ type: Boolean, default: true })
  readonly isPlayer!: boolean;

  @Prop({ type: Number, required: true })
  readonly displaySocial!: number;

  socialOrder = util.socialOrder;

  fontSizeModifier = {
    name: 1,
    social: 1,
  };

  nameElementClass = [
    'textParent name',
    { player: this.isPlayer },
    { commentator: !this.isPlayer },
  ];

  @Watch('name')
  onChangeName(): void {
    this.fontSizeModifier.name = 1;
    this.fontSizeModifier.social = 1;
  }

  @Watch('social')
  onChangeSocial(): void {
    this.fontSizeModifier.name = 1;
    this.fontSizeModifier.social = 1;
  }

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

    if (!namePlateDom || !nameDom || !socialDom) return;

    const namePlateWidth = namePlateDom.clientWidth;
    const nameWidth = nameDom.clientWidth;
    const socialWidth = socialDom.clientWidth;

    if (namePlateWidth < (nameWidth + socialWidth)) {
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
}

.textParent {
  padding: 0 20px;
  display: flex;
  /*justify-content: center;*/
  align-items: center;
}

.name {
  width: 460px;
}

.social {
  width: 400px;
}

.text {
  padding-left: 10px;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.social-enter-active {
  transition: all 1s 1s;
}

.social-leave-active {
  transition: all 1s;
}

.social-enter, .social-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
