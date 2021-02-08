<template>
  <img src="../images/logo/logo_2.png" v-if="simple">
  <img src="../images/logo/logo.png" v-else>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class EventLogo extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly simple!: boolean;
}
</script>
