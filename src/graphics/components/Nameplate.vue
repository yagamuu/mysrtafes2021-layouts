<template>
  <div class="nameplate" :style="position">
    <div :class="nameElementClass">
      <img src="../images/icon/controller_white_a.png" height="44px" v-if="isPlayer">
      <img src="../images/icon/mic_white.png" height="44px" v-else>
      <span class="text">{{name}}</span>
    </div>

    <div>
    <transition name="social" mode="out-in">
      <div
        class="textParent social"
        v-if="displaySocial === socialOrder.twitter && social.twitter"
        key="twitter"
      >
        <img src="../images/icon/twitter_white.png" height="44px">
        <span class="text">{{social.twitter}}</span>
      </div>
      <div
        class="textParent social"
        v-else-if="displaySocial === socialOrder.twitch && social.twitch"
        key="twitch"
      >
        <img src="../images/icon/twitch.png" height="44px">
        <span class="text">{{social.twitch}}</span>
      </div>
      <div
        class="textParent social"
        v-else-if="displaySocial === socialOrder.youtube && social.youtube"
        key="youtube"
      >
        <img src="../images/icon/youtube.png" height="44px">
        <span class="text">{{social.youtube}}</span>
      </div>
      <div
        class="textParent social"
        v-else-if="displaySocial === socialOrder.nico && social.nico"
        key="nico"
      >
        <img src="../images/icon/nico.png" height="44px">
        <span class="text">{{social.nico}}</span>
      </div>
      <div
        class="textParent social"
        v-else
        key="blank"
      >
        <span class="text"/>
      </div>
    </transition>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vue, Component, Prop } from 'vue-property-decorator';
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

  nameElementClass = [
    'textParent name',
    { player: this.isPlayer },
    { commentator: !this.isPlayer },
  ];
}
</script>

<style lang="scss" scoped>
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
  font-size: 24px;
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
