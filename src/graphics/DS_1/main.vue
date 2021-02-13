<template>
  <game-layout :clipPaths="clipPaths">
    <div class="header">
      <event-logo style="width: 240px;"/>
      <div class="hashImg">
        <img src="../images/hashtag.png" height="45px" style="margin-top:10px;">
      </div>
    </div>
    <twitter-notification :position="twitter" :line="6"/>
    <run-information-one-line :position="gameTitle" :text="currentRunData.game" :fontSize="38"/>
    <run-information-one-line :position="category" :text="currentRunData.category"/>
    <estimate :position="estimate" :estimateS="currentRunData.estimateS"/>
    <nameplate
      :isPlayer="false"
      :position="commentator"
      :name="commentatorsNameOneLine"
      :social="commentatorsSocialOneLine"
      :displaySocial="currentSocial"
    />
    <nameplate
      :position="player"
      :name="currentRunner.name"
      :social="currentRunner.social"
      :displaySocial="currentSocial"
    />
    <timer :position="timer" :time="timerReplicant.time" :timerStatus="timerReplicant.state"/>
  </game-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ClipPath } from '@/types/ClipPath';
import { Getter } from 'vuex-class';
import { Runner } from '@/types/Runners';
import { Social } from '@/types/Social';
import type { RunData, Timer as TimerInterface } from '@/types/schemas/speedcontrol';
import { ComponentPosition } from '@/types/ComponentPosition';
import GameLayout from '../views/GameLayout.vue';
import EventLogo from '../components/EventLogo.vue';
import RunInformationOneLine from '../components/RunInformationOneLine.vue';
import Estimate from '../components/Estimate.vue';
import Nameplate from '../components/Nameplate.vue';
import Timer from '../components/Timer.vue';
import TwitterNotification from '../components/TwitterNotification/TwitterNotification.vue';

@Component({
  components: {
    GameLayout,
    EventLogo,
    Estimate,
    RunInformationOneLine,
    Nameplate,
    Timer,
    TwitterNotification,
  },
})
export default class extends Vue {
  @Getter readonly currentRunData!: RunData;
  @Getter readonly timerReplicant!: TimerInterface;
  @Getter readonly currentRunner!: Runner;
  @Getter readonly commentatorsNameOneLine!: string;
  @Getter readonly commentatorsSocialOneLine!: Social;
  @Getter readonly currentSocial!: number;

  clipPaths: ClipPath[] = [
    {
      x: 240 + 490 + 40 + 5,
      y: 10 + 5,
      width: 1130 - (5 * 2),
      height: 860 - (5 * 2),
    }, // DS-main
    {
      x: 140 + 5,
      y: 60 + 230 + 20 + 5,
      width: 620 - (5 * 2),
      height: 460 - (5 * 2),
    }, // DS-sub
  ];

  gameTitle: ComponentPosition = {
    top: '880px',
    left: '10px',
    width: '930px',
    height: '80px',
  };

  category: ComponentPosition = {
    top: '980px',
    left: '10px',
    width: '930px',
    height: '80px',
  };

  estimate: ComponentPosition = {
    top: '780px',
    left: '10px',
    width: '450px',
    height: '80px',
  };

  player: ComponentPosition = {
    top: '880px',
    left: '960px',
    width: '930px',
    height: '80px',
  };

  commentator: ComponentPosition = {
    top: '980px',
    left: '960px',
    width: '930px',
    height: '80px',
  };

  timer: ComponentPosition = {
    top: '780px',
    left: '480px',
    width: '270px',
    height: '80px',
  };

  twitter: ComponentPosition = {
    top: '60px',
    left: '240px',
    width: '490px',
    height: '220px',
  };
}
</script>

<style lang="scss" scoped>
@import '../styles/gameLayout.scss';

.header {
  @include baseCompornent($width:730px);
  z-index: 1;
  overflow: hidden;
}

.hashImg {
  display: flex;
  height: 55px;
  width: 490px;
}

</style>
