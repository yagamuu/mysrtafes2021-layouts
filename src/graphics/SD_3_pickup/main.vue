<template>
  <game-layout :clipPaths="clipPaths">
    <div class="header">
      <event-logo style="width: 240px;"/>
      <img src="../images/hashtag.png" height="45px" style="margin-top:10px;">
    </div>
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
      :position="player[0]"
      :name="currentRunnersRace[0].name"
      :social="currentRunnersRace[0].social"
      :displaySocial="currentSocial"
    />
    <nameplate
      :position="player[1]"
      :name="currentRunnersRace[1].name"
      :social="currentRunnersRace[1].social"
      :displaySocial="currentSocial"
      :width="350"
    />
    <nameplate
      :position="player[2]"
      :name="currentRunnersRace[2].name"
      :social="currentRunnersRace[2].social"
      :displaySocial="currentSocial"
      :width="350"
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

@Component({
  components: {
    GameLayout,
    EventLogo,
    Estimate,
    RunInformationOneLine,
    Nameplate,
    Timer,
  },
})
export default class extends Vue {
  @Getter readonly currentRunData!: RunData;
  @Getter readonly timerReplicant!: TimerInterface;
  @Getter readonly currentRunnersRace!: Runner[];
  @Getter readonly commentatorsNameOneLine!: string;
  @Getter readonly commentatorsSocialOneLine!: Social;
  @Getter readonly currentSocial!: number;

  clipPaths: ClipPath[] = [
    {
      x: 240 + 490 + 40 + 5,
      y: 10 + 5,
      width: 1130 - (5 * 2),
      height: 860 - (5 * 2),
    }, // SD-1(main)
    {
      x: 10 + 5,
      y: 60 + 230 + 150 + 50 + 5,
      width: 360 - (5 * 2),
      height: 270 - (5 * 2),
    }, // SD-2
    {
      x: 10 + 360 + 30 + 5,
      y: 60 + 230 + 150 + 50 + 5,
      width: 360 - (5 * 2),
      height: 270 - (5 * 2),
    }, // SD-3
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

  player: ComponentPosition[] = [
    {
      top: '880px',
      left: '960px',
      width: '930px',
      height: '80px',
    },
    {
      top: '440px',
      left: '10px',
      width: '350px',
      height: '40px',
    },
    {
      top: '440px',
      left: '400px',
      width: '350px',
      height: '40px',
    },
  ];

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
}
</script>

<style lang="scss" scoped>
@import '../styles/gameLayout.scss';

.header {
  @include baseCompornent($width:670px);
}

</style>
