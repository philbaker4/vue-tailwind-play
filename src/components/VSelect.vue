<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <!--
  Custom select controls like this require a considerable amount of JS to implement from scratch. We're planning
  to build some low-level libraries to make this easier with popular frameworks like React, Vue, and even Alpine.js
  in the near future, but in the mean time we recommend these reference guides when building your implementation:

  https://www.w3.org/TR/wai-aria-practices/#Listbox
  https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
-->
  <div>
    <transition
      leave-active-class="transition ease-in duration-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        @click="open = false"
        class="z-20 fixed left-0 top-0 w-full h-full bg-gray-100 opacity-50"
      ></div>
    </transition>
    <label
      v-if="label"
      id="listbox-label"
      class="v-select-label"
      :class="{
        'z-30': open
      }"
    >
      {{ label }}
    </label>
    <div
      class=" relative"
      @click="open = !open"
      :class="{
        'z-30': open
      }"
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        class="extracted-button-style"
      >
        <span class="block truncate">
          {{ options.find(o => o.val === selected).label }}
        </span>
        <span
          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <!-- Heroicon name: selector -->
          <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="open"
          class="absolute mt-1 w-full rounded-md bg-white shadow-lg"
        >
          <ul
            tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-item-3"
            class="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            <!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

          Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
        -->
            <template v-for="(option, i) in options">
              <li
                @click="selected = option.val"
                @mouseover="temp = i"
                @mouseleave="temp = null"
                :key="option.val"
                id="listbox-option-0"
                role="option"
                class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                :class="{
                  'bg-indigo-600': selected === option.val,
                  'bg-indigo-100': temp === i
                }"
              >
                <span
                  class="font-normal block truncate"
                  :class="{
                    'text-white font-semibold': selected === option.val
                  }"
                >
                  {{ option.label }}
                </span>

                <!--
              Checkmark, only display for selected option.

              Highlighted: "text-white", Not Highlighted: "text-indigo-600"
            -->
                <span
                  v-if="selected === option.val"
                  class="text-white absolute inset-y-0 right-0 flex items-center pr-4"
                >
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </li>
            </template>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Label"
    }
  },
  data() {
    return {
      open: false,
      selected: 0,
      temp: null,
      options: [
        {
          val: 0,
          label: "First"
        },
        {
          val: 1,
          label: "Second"
        },
        {
          val: 2,
          label: "Third"
        },
        {
          val: 4,
          label: "Fourth"
        },
        {
          val: 5,
          label: "Fifth"
        },
        {
          val: 6,
          label: "Sixth"
        },
        {
          val: 7,
          label: "Seventh"
        },
        {
          val: 8,
          label: "Eighth"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.extracted-button-style {
  @apply text-black bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm;
}

.v-select-label {
  // following apply statement adds those styles
  // if we still wanted to keep markup pretty & name classes
  // though this does go against tailwinds performance benefits by creating additional classes with overlap
  // i.e. there will now be a 'display: block;' css line for this class as well as other classes that are display block
  // rather than tailwind only creating a single display:block; css line to apply to the block class

  @apply block text-sm font-medium text-gray-700 mb-1;
  // display: block;
  // font-size: 12px;
  // font-weight: medium;
  // color: rgb(90, 90, 90);
  // margin-bottom: .25rem;
}
</style>
