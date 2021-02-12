<template>
  <div>
    <span class="informationText">{{setupText}}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { SetupInformationArray } from '@/types/schemas/setupInformationArray';

@Component({
  components: {
  },
})
export default class SetupInformation extends Vue {
  @Getter readonly setupInformationArray!: SetupInformationArray;

  get setupText(): string {
    if (!this.setupInformationArray[0]) {
      return '';
    }

    return this.setupInformationArray[0].text;
  }
}
</script>

<style lang="scss" scoped>

.informationText {
  display: flex;
  color: #9bffe9;
  font-size: 34px;
  text-shadow:
  rgb(0, 0, 0) 2px 0px 0px,
  rgb(0, 0, 0) 1.75517px 0.958851px 0px,
  rgb(0, 0, 0) 1.0806px 1.68294px 0px,
  rgb(0, 0, 0) 0.141474px 1.99499px 0px,
  rgb(0, 0, 0) -0.832294px 1.81859px 0px,
  rgb(0, 0, 0) -1.60229px 1.19694px 0px,
  rgb(0, 0, 0) -1.97998px 0.28224px 0px,
  rgb(0, 0, 0) -1.87291px -0.701566px 0px,
  rgb(0, 0, 0) -1.30729px -1.5136px 0px,
  rgb(0, 0, 0) -0.421592px -1.95506px 0px,
  rgb(0, 0, 0) 0.567324px -1.91785px 0px,
  rgb(0, 0, 0) 1.41734px -1.41108px 0px,
  rgb(0, 0, 0) 1.92034px -0.558831px 0px;
}

</style>
