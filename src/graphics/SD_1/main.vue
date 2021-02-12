<template>
  <game-layout :clipPaths="clipPaths">
    <div class="header">
      <event-logo style="width: 240px;"/>
      <div class="hashImg">
        <img src="../images/hashtag.png" height="45px" style="margin-top:10px;">
      </div>
    </div>
    <twitter-notification :position="twitter" :line="8"/>
    <game-title :position="gameTitle" :text="currentRunData.game" />
    <run-information-one-line :position="category" :text="currentRunData.category"/>
    <estimate :position="estimate" :estimateS="currentRunData.estimateS"/>
    <nameplate
      :isPlayer="false"
      :position="commentator"
      :name="commentatorsNameOneLine"
      :social="commentatorsSocialOneLine"
      :displaySocial="currentSocial"
      :width="900"
    />
    <nameplate
      :position="player"
      :name="currentRunner.name"
      :social="currentRunner.social"
      :displaySocial="currentSocial"
      :width="950"
    />
  </game-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ClipPath } from '@/types/ClipPath';
import { Getter } from 'vuex-class';
import { Runner } from '@/types/Runners';
import { Social } from '@/types/Social';
import type { RunData, Timer } from '@/types/schemas/speedcontrol';
import { ComponentPosition } from '@/types/ComponentPosition';
import GameLayout from '../views/GameLayout.vue';
import EventLogo from '../components/EventLogo.vue';
import GameTitle from '../components/GameTitle.vue';
import RunInformationOneLine from '../components/RunInformationOneLine.vue';
import Estimate from '../components/Estimate.vue';
import Nameplate from '../components/Nameplate.vue';
import TwitterNotification from '../components/TwitterNotification/TwitterNotification.vue';

@Component({
  components: {
    GameLayout,
    EventLogo,
    GameTitle,
    RunInformationOneLine,
    Estimate,
    Nameplate,
    TwitterNotification,
  },
})
export default class extends Vue {
  @Getter readonly currentRunData!: RunData;
  @Getter readonly timerReplicant!: Timer;
  @Getter readonly currentRunner!: Runner;
  @Getter readonly commentatorsNameOneLine!: string;
  @Getter readonly commentatorsSocialOneLine!: Social;
  @Getter readonly currentSocial!: number;

  clipPaths: ClipPath[] = [
    {
      x: 240 + 370 + 60 + 5,
      y: 30 + 5,
      width: 1230 - (5 * 2),
      height: 930 - (5 * 2),
    }, // SD
    {
      x: 375 + 5,
      y: 810 + 5,
      width: 260 - (5 * 2),
      height: 90 - (5 * 2),
    }, // Timer
  ];

  gameTitle: ComponentPosition = {
    top: '400px',
    left: '35px',
    width: '590px',
    height: '180px',
  };

  category: ComponentPosition = {
    top: '610px',
    left: '35px',
    width: '590px',
    height: '70px',
  };

  estimate: ComponentPosition = {
    top: '710px',
    left: '35px',
    width: '590px',
    height: '70px',
  };

  player: ComponentPosition = {
    top: '990px',
    left: '940px',
    width: '950px',
    height: '60px',
  };

  commentator: ComponentPosition = {
    top: '990px',
    left: '10px',
    width: '900px',
    height: '60px',
  };

  twitter: ComponentPosition = {
    top: '60px',
    left: '240px',
    width: '370px',
    height: '290px',
  };
}
</script>

<style lang="scss" scoped>
@import '../styles/gameLayout.scss';

.header {
  @include baseCompornent($width:610px);
  z-index: 1;
  overflow: hidden;
}

.hashImg {
  display: flex;
  background-color: #254678;
  height: 55px;
  width: 370px;
}

</style>
