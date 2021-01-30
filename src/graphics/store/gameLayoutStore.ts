import { ReplicantModule } from '@/browser_shared/replicant_store';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getModule, Module, VuexModule } from 'vuex-module-decorators';
import type { RunData, RunDataArray, Timer } from '@/types/schemas/speedcontrol';
import type { SpeedcontrolCurrentRunIndex } from '@/types/schemas/speedcontrolAdditions';

Vue.use(Vuex);

@Module({ name: 'GameLayoutModule' })
class GameLayoutModule extends VuexModule {
  get reps() {
    return this.context.rootState.ReplicantModule.reps;
  }

  get runDataArrayReplicant(): RunDataArray {
    return this.reps.runDataArrayReplicant;
  }

  get timerReplicant(): Timer {
    return this.reps.timerReplicant;
  }

  get speedcontrolCurrentRunIndexReplicant(): SpeedcontrolCurrentRunIndex {
    return this.reps.speedcontrolCurrentRunIndexReplicant;
  }

  get currentRunData(): RunData {
    return this.runDataArrayReplicant[this.speedcontrolCurrentRunIndexReplicant];
  }
}

const store = new Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: { ReplicantModule, GameLayoutModule },
});
export default store;
export const storeModule = getModule(GameLayoutModule, store);
