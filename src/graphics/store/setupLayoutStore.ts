import { ReplicantModule } from '@/browser_shared/replicant_store';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getModule, Module, VuexModule } from 'vuex-module-decorators';
import type { SpotifyPlayingTrack } from '@/types/schemas/nodecgSpotifyWidget';
import type { RunDataArray } from '@/types/schemas/speedcontrol';
import type { ActiveTweet } from '@/types/schemas/nodecgTwitterWidget';
import type { SpeedcontrolCurrentRunIndex } from '@/types/schemas/speedcontrolAdditions';

Vue.use(Vuex);

@Module({ name: 'SetupLayoutModule' })
class SetupLayoutModule extends VuexModule {
  get reps() {
    return this.context.rootState.ReplicantModule.reps;
  }

  get spotifyPlayingTrackReplicant(): SpotifyPlayingTrack {
    return this.reps.spotifyPlayingTrackReplicant;
  }

  get runDataArrayReplicant(): RunDataArray {
    return this.reps.runDataArrayReplicant;
  }

  get speedcontrolCurrentRunIndexReplicant(): SpeedcontrolCurrentRunIndex {
    return this.reps.speedcontrolCurrentRunIndexReplicant;
  }

  get upcomingRuns(): RunDataArray {
    const index = this.speedcontrolCurrentRunIndexReplicant || 0;
    return this.runDataArrayReplicant.slice(index, index + 3);
  }

  get activeTweetReplicant(): ActiveTweet {
    return this.reps.activeTweetReplicant;
  }
}

const store = new Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: { ReplicantModule, SetupLayoutModule },
});
export default store;
export const storeModule = getModule(SetupLayoutModule, store);
