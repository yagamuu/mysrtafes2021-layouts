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
      :width="920"
    />
    <nameplate
      :position="player[0]"
      :name="currentRunnersRace[0].name"
      :social="currentRunnersRace[0].social"
      :displaySocial="currentSocial"
      :width="670"
    />
    <nameplate
      :position="player[1]"
      :name="currentRunnersRace[1].name"
      :social="currentRunnersRace[1].social"
      :displaySocial="currentSocial"
      :width="670"
    />
    <nameplate
      :position="player[2]"
      :name="currentRunnersRace[2].name"
      :social="currentRunnersRace[2].social"
      :displaySocial="currentSocial"
      :width="670"
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
      x: 1000 + 5,
      y: 60 + 5,
      width: 840 - (5 * 2),
      height: 480 - (5 * 2),
    }, // HD-1
    {
      x: 140 + 5,
      y: 60 + 480 + 5,
      width: 840 - (5 * 2),
      height: 480 - (5 * 2),
    }, // HD-2
    {
      x: 1000 + 5,
      y: 60 + 480 + 5,
      width: 840 - (5 * 2),
      height: 480 - (5 * 2),
    }, // HD-3
    {
      x: 1000 + 5,
      y: 5,
      width: 155 - (5 * 2),
      height: 60 - (5 * 2),
    }, // Timer-1
    {
      x: 140 + 5,
      y: 60 + 480 + 480 + 5,
      width: 155 - (5 * 2),
      height: 60 - (5 * 2),
    }, // Timer-2
    {
      x: 1000 + 5,
      y: 60 + 480 + 480 + 5,
      width: 155 - (5 * 2),
      height: 60 - (5 * 2),
    }, // Timer-3
  ];

  gameTitle: ComponentPosition = {
    top: '250px',
    left: '30px',
    width: '920px',
    height: '90px',
  };

  category: ComponentPosition = {
    top: '360px',
    left: '30px',
    width: '460px',
    height: '55px',
  };

  estimate: ComponentPosition = {
    top: '360px',
    left: '520px',
    width: '430px',
    height: '55px',
  };

  player: ComponentPosition[] = [
    {
      top: '0px',
      left: '1160px',
      width: '670px',
      height: '50px',
    },
    {
      top: '1020px',
      left: '300px',
      width: '670px',
      height: '50px',
    },
    {
      top: '1020px',
      left: '1160px',
      width: '670px',
      height: '50px',
    },
  ];

  commentator: ComponentPosition = {
    top: '435px',
    left: '30px',
    width: '920px',
    height: '75px',
  };
}
</script>

<style lang="scss" scoped>
@import '../styles/gameLayout.scss';

.header {
  @include baseCompornent($width:670px);
}

</style>
