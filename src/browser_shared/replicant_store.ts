import type { RunDataArray, Timer } from '@/types/schemas/speedcontrol';
import type { SpeedcontrolCurrentRunIndex } from '@/types/schemas/speedcontrolAdditions';
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
  speedcontrolCurrentRunIndexReplicant: ReplicantBrowser<SpeedcontrolCurrentRunIndex>;
  [k: string]: ReplicantBrowser<unknown>;
} = {
  runDataArrayReplicant: nodecg.Replicant('runDataArray', 'nodecg-speedcontrol'),
  timerReplicant: nodecg.Replicant('timer', 'nodecg-speedcontrol'),
  speedcontrolCurrentRunIndexReplicant: nodecg.Replicant(
    'speedcontrolCurrentRunIndex', 'speedcontrol-additions',
  ),
};

@Module({ name: 'ReplicantModule', namespaced: true })
export class ReplicantModule extends VuexModule {
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
export let replicantModule!: ReplicantModule;
export const replicantNS = namespace('ReplicantModule');

export async function setUpReplicants(store: Store<unknown>): Promise<void> {
  // Listens for each declared replicants "change" event, and updates the state.
  Object.keys(reps).forEach((name) => {
    reps[name].on('change', (val) => {
      store.commit('ReplicantModule/setState', { name, val });
    });
  });
  // We should make sure the replicant are ready to be read, needs to be done in browser context.
  await NodeCG.waitForReplicants(...Object.keys(reps).map((key) => reps[key]));
  replicantModule = getModule(ReplicantModule, store);
}
