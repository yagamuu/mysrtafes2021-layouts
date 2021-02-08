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
  @Getter readonly currentRunner!: Runner;
  @Getter readonly commentatorsNameOneLine!: string;
  @Getter readonly commentatorsSocialOneLine!: Social;
  @Getter readonly currentSocial!: number;

  clipPaths: ClipPath[] = [{
    x: 240 + 490 + 40 + 5,
    y: 10 + 5,
    width: 1130 - (5 * 2),
    height: 860 - (5 * 2),
  },
  {
    x: 140 + 5,
    y: 60 + 230 + 20 + 5,
    width: 620 - (5 * 2),
    height: 460 - (5 * 2),
  },
  {
    x: 480 + 5,
    y: 780 + 5,
    width: 280 - (5 * 2),
    height: 90 - (5 * 2),
  }];

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
}
</script>

<style lang="scss" scoped>
@import '../styles/gameLayout.scss';

.header {
  @include baseCompornent($width:670px);
}

</style>
