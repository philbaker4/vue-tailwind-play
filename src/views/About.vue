<template>
  <div class="p-4 flex flex-col">
    <div class="text-2xl mb-2">
      Select Component
    </div>
    <div class="mb-4">
      <VSelect class="w-32" />
    </div>
    <div class="text-2xl mb-2">
      Responsive Panel Layout
    </div>
    <div
      class=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2"
    >
      <DvPanel />
      <DvPanel />
      <DvPanel />
      <DvPanel />
      <DvPanel />
      <DvPanel />
    </div>
  </div>
</template>

<script>
import DvPanel from "@/components/DvPanel.vue";
import VSelect from "@/components/VSelect.vue";
export default {
  components: {
    DvPanel,
    VSelect
  }
};
</script>

<style scoped lang="scss"></style>
