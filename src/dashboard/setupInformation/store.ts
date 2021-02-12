import { ReplicantModule } from '@/browser_shared/replicant_store';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getModule, Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

Vue.use(Vuex);

export const transitionStatus = {
  informations: 0,
  creation: 1,
  modification: 2,
} as const;

@Module({ name: 'OurModule' })
class OurModule extends VuexModule {
  transition: number = transitionStatus.informations;
  text = '';

  // Helper getter to return all replicants.
  get reps() {
    return this.context.rootState.ReplicantModule.reps;
  }

  get setupInformationArray() {
    return this.reps.setupInformationArrayReplicant;
  }

  @Mutation
  OPEN_CREATION_FORM(): void {
    this.transition = transitionStatus.creation;
  }

  @Mutation
  CLOSE_FORM(): void {
    this.transition = transitionStatus.informations;
  }

  @Action
  createInformation(text: string): void {
    nodecg.sendMessage('createInformation', { text });
  }

  @Action
  deleteInformation(id: string): void {
    nodecg.sendMessage('deleteInformation', { id });
  }

  @Action
  transitionToCreation(): void {
    this.OPEN_CREATION_FORM();
  }

  @Action
  transitionToInformation(): void {
    this.CLOSE_FORM();
  }
}

const store = new Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: { ReplicantModule, OurModule },
});
export default store;
export const storeModule = getModule(OurModule, store);
