<template>
  <div
    class="inline-flex border border-gray-500 rounded overflow-hidden"
    :class="{ isVertical: isVertical }"
  >
    <div
      v-for="(opt, i) in options"
      :key="opt.val"
      class="flex flex-grow-1 items-center justify-center m-0 px-2 py-1 text-sm cursor-pointer "
      :class="[
        opt.val === active
          ? 'text-white bg-indRed'
          : 'text-gray-700 bg-gray-200 hover:bg-gray-300',
        { 'border-r border-gray-500': i !== options.length - 1 }
      ]"
      :rel-key="opt.val"
      @click="toggle(opt)"
    >
      {{ opt.label }}
    </div>
  </div>
</template>

<script>
// bind with v-model in parent component
export default {
  /*
    options: [
        {val: x, label: y}
    ],
    active: x
   */
  model: {
    prop: "active",
    event: "toggled"
  },
  props: {
    options: Array,
    active: [Number, String],
    isVertical: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle: function(opt) {
      this.$emit("toggled", opt.val);
    }
  }
};
</script>

<style scoped lang="scss"></style>
