<template>
  <game-layout :clipPaths="clipPaths">
    <div class="header">
      <event-logo style="width: 240px;"/>
      <img src="../images/hashtag.png" height="45px" style="margin-top:10px;">
    </div>
    <game-title :position="gameTitle" :text="currentRunData.game" />
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

@Component({
  components: {
    GameLayout,
    EventLogo,
    GameTitle,
    RunInformationOneLine,
    Estimate,
    Nameplate,
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
      x: 240 + 370 + 10 + 5,
      y: 100 + 5,
      width: 1300 - (5 * 2),
      height: 740 - (5 * 2),
    }, // HD
    {
      x: 350 + 5,
      y: 750 + 5,
      width: 260 - (5 * 2),
      height: 90 - (5 * 2),
    }, // Timer
  ];

  gameTitle: ComponentPosition = {
    top: '340px',
    left: '10px',
    width: '590px',
    height: '180px',
  };

  category: ComponentPosition = {
    top: '550px',
    left: '10px',
    width: '590px',
    height: '70px',
  };

  estimate: ComponentPosition = {
    top: '650px',
    left: '10px',
    width: '590px',
    height: '70px',
  };

  player: ComponentPosition = {
    top: '910px',
    left: '970px',
    width: '930px',
    height: '80px',
  };

  commentator: ComponentPosition = {
    top: '910px',
    left: '10px',
    width: '930px',
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
