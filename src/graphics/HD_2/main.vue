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
      :width="640"
    />
    <nameplate
      :position="player[0]"
      :name="currentRunnersRace[0].name"
      :social="currentRunnersRace[0].social"
      :displaySocial="currentSocial"
      :width="780"
    />
    <nameplate
      :position="player[1]"
      :name="currentRunnersRace[1].name"
      :social="currentRunnersRace[1].social"
      :displaySocial="currentSocial"
      :width="780"
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
import RunInformationOneLine from '../components/RunInformationOneLine.vue';
import Estimate from '../components/Estimate.vue';
import Nameplate from '../components/Nameplate.vue';

@Component({
  components: {
    GameLayout,
    EventLogo,
    Estimate,
    RunInformationOneLine,
    Nameplate,
  },
})
export default class extends Vue {
  @Getter readonly currentRunData!: RunData;
  @Getter readonly timerReplicant!: Timer;
  @Getter readonly currentRunnersRace!: Runner[];
  @Getter readonly commentatorsNameOneLine!: string;
  @Getter readonly commentatorsSocialOneLine!: Social;
  @Getter readonly currentSocial!: number;

  clipPaths: ClipPath[] = [
    {
      x: 10 + 5,
      y: 60 + 170 + 50 + 5,
      width: 945 - (5 * 2),
      height: 540 - (5 * 2),
    }, // HD-left
    {
      x: 965 + 5,
      y: 60 + 170 + 50 + 5,
      width: 945 - (5 * 2),
      height: 540 - (5 * 2),
    }, // HD-right
    {
      x: 10 + 5,
      y: 840 + 5,
      width: 150 - (5 * 2),
      height: 60 - (5 * 2),
    }, // Timer-left
    {
      x: 965 + 5,
      y: 840 + 5,
      width: 150 - (5 * 2),
      height: 60 - (5 * 2),
    }, // Timer-right
  ];

  gameTitle: ComponentPosition = {
    top: '60px',
    left: '970px',
    width: '930px',
    height: '90px',
  };

  category: ComponentPosition = {
    top: '170px',
    left: '970px',
    width: '470px',
    height: '50px',
  };

  estimate: ComponentPosition = {
    top: '170px',
    left: '1460px',
    width: '440px',
    height: '50px',
  };

  player: ComponentPosition[] = [
    {
      top: '840px',
      left: '165px',
      width: '780px',
      height: '50px',
    },
    {
      top: '840px',
      left: '1120px',
      width: '780px',
      height: '50px',
    },
  ];

  commentator: ComponentPosition = {
    top: '930px',
    left: '630px',
    width: '640px',
    height: '60px',
  };
}
</script>

<style lang="scss" scoped>
@import '../styles/gameLayout.scss';

.header {
  @include baseCompornent($width:670px);
}

</style>
