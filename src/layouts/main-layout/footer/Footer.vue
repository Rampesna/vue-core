<template>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { footerWidthFluid, footerDisplay } from "@/core/helpers/config";

export default defineComponent({
  name: "theme-footer",
  components: {},
  setup() {
    return {
      footerWidthFluid,
      footerDisplay,
    };
  },
});
</script>
