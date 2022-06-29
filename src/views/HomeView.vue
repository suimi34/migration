<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <counter />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import Counter from "@/components/Counter.vue"; // @ is an alias to /src

@Options({
  components: {
    Counter,
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
