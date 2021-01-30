import type { RunDataArray } from '@/types/schemas/speedcontrol/RunData';
import type { Timer } from '@/types/schemas/speedcontrol/Timer';
import clone from 'clone';
import type { ReplicantBrowser } from 'nodecg/types/browser';
import Vue from 'vue';
import type { Store } from 'vuex';
import { namespace } from 'vuex-class';
import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

// Declaring replicants.
export const reps: {
  runDataArrayReplicant: ReplicantBrowser<RunDataArray>;
  timerReplicant: ReplicantBrowser<Timer>;
  [k: string]: ReplicantBrowser<unknown>;
} = {
  runDataArrayReplicant: nodecg.Replicant('runDataArray', 'nodecg-speedcontrol'),
  timerReplicant: nodecg.Replicant('timer', 'nodecg-speedcontrol'),
};

// All the replicant types.
export interface SpeedControlReplicantTypes {
  runDataArrayReplicant: RunDataArray;
  timerReplicant: Timer;
}

@Module({ name: 'SpeedcontrolModule', namespaced: true })
export class SpeedcontrolModule extends VuexModule {
  // Replicant values are stored here.
  reps: { [k: string]: unknown } = {};

  // This sets the state object above when a replicant sends an update.
  @Mutation
  setState({ name, val }: { name: string, val: unknown }): void {
    Vue.set(this.reps, name, clone(val));
  }

  // This is a generic mutation to update a named replicant.
  @Mutation
  setReplicant<K>({ name, val }: { name: string, val: K }): void {
    Vue.set(this.reps, name, clone(val)); // Also update local copy, although no schema validation!
    reps[name].value = clone(val);
  }
}

// eslint-disable-next-line import/no-mutable-exports
export let speedcontrolModule!: SpeedcontrolModule;
export const replicantNS = namespace('SpeedcontrolModule');

export async function setUpReplicants(store: Store<unknown>): Promise<void> {
  // Listens for each declared replicants "change" event, and updates the state.
  Object.keys(reps).forEach((name) => {
    reps[name].on('change', (val) => {
      store.commit('SpeedcontrolModule/setState', { name, val });
    });
  });
  // We should make sure the replicant are ready to be read, needs to be done in browser context.
  await NodeCG.waitForReplicants(...Object.keys(reps).map((key) => reps[key]));
  speedcontrolModule = getModule(SpeedcontrolModule, store);
}
