<template>
  <div class=" p-4 bg-gray-100">
    <template v-for="(c, i) in Object.keys(colors)">
      <div :key="i" class="mb-3">
        <div :key="'label-' + i" class="text-black text-left">{{ c }}</div>
        <div :class="`text-white grid grid-cols-10`">
          <template v-if="c === 'black'">
            <div class="col-span-full w-full h-8 bg-black"></div>
          </template>
          <template v-else-if="c === 'white'">
            <div class="col-span-full w-full h-8 bg-white"></div>
          </template>
          <template v-else-if="c === 'indBlue'">
            <div class="col-span-full w-full h-8 bg-indBlue"></div>
          </template>
          <template v-else-if="c === 'indRed'">
            <div class="col-span-full w-full h-8 bg-indRed"></div>
          </template>
          <template v-else>
            <template v-for="(s, si) in Object.keys(colors[c])">
              <div
                :key="si"
                class="w-full h-8 flex items-center justify-center "
                :class="[
                  ['50', '100', '200', '300'].includes(s)
                    ? 'text-black'
                    : 'text-white'
                ]"
                :style="{ 'background-color': colors[c][s] }"
              >
                {{ s }}
              </div>
            </template>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);
console.log({ fullConfig });
export default {
  data() {
    return {
      colors: fullConfig.theme.colors
    };
  }
};
</script>

<style scoped lang="scss"></style>
