<template>
  <div class="p-4 flex flex-col">
    <div class="demo-group">
      <div class="text-2xl ">
        Select Component
      </div>
      <div class="text-sm text-gray-500 mb-4">
        Using @apply in a few places - check out the component file
      </div>
      <div>
        <VSelect class="w-32" />
      </div>
    </div>
    <div class="demo-group">
      <div class="text-2xl mb-4">
        MultiToggle
      </div>
      <div>
        <MultiToggle v-model="selectedOption" :options="options" />
      </div>
    </div>
    <div class="demo-group">
      <div class="text-2xl mb-4">
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
    <div class="demo-group">
      <div class="text-2xl mb-4">
        Responsive Panel Layout using @apply
      </div>
      <div class="responsive-panel-layout">
        <DvPanel />
        <DvPanel />
        <DvPanel />
        <DvPanel />
        <DvPanel />
        <DvPanel />
      </div>
    </div>
  </div>
</template>

<script>
import DvPanel from "@/components/DvPanel.vue";
import VSelect from "@/components/VSelect.vue";
import MultiToggle from "@/components/MultiToggle.vue";
export default {
  components: {
    DvPanel,
    VSelect,
    MultiToggle
  },
  data() {
    return {
      selectedOption: 1,
      options: [
        {
          val: 1,
          label: "One"
        },
        {
          val: 2,
          label: "Two"
        },
        {
          val: 3,
          label: "Three"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.responsive-panel-layout {
  // pull responsive behavior into separate applies, one for each media query
  // sm, md, lg, xl, 2xl are built in min-width media queries
  @apply grid gap-2 grid-cols-1;
  @apply sm:grid-cols-2;
  @apply md:grid-cols-3;
  @apply lg:grid-cols-4;
}

.demo-group {
  &:not(:first-child) {
    @apply mt-6;
  }
  &:not(:last-child) {
    @apply mb-6;
  }
}
</style>
