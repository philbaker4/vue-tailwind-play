<template>
  <div
    class="p-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2"
  >
    <DvPanel />
    <DvPanel />
    <DvPanel />
    <DvPanel />
    <DvPanel />
    <DvPanel />
  </div>
</template>

<script>
import DvPanel from "@/components/DvPanel.vue";
export default {
  components: {
    DvPanel
  }
};
</script>

<style scoped lang="scss"></style>
