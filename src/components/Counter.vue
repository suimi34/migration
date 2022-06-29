<template>
  {{ count }}
  <button @click="countUp">count up button</button>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { useStore } from "vuex";

export default class Counter extends Vue {
  private store = useStore();
  private count = this.store.state.count;
  private countUp = () => {
    this.store.commit("increment");
    this.count = this.store.state.count;
  };
}
</script>
