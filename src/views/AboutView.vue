<template>
  <div class="about">
    <h1>This is an about page</h1>
    <counter />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import Counter from "@/components/Counter.vue";

@Options({
  components: {
    Counter,
  },
})
export default class AboutView extends Vue {}
</script>
