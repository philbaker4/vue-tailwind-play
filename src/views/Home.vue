<template>
  <div class=" mx-12">
    <div class="text-3xl mb-4">Resources</div>
    <div class="flex flex-col">
      <a
        class="mb-2 underline text-indRed"
        href="https://tailwindcss.com/"
        target="_blank"
        >TailwindCSS</a
      >
      <a
        class="mb-2 underline text-indRed"
        href="https://tailwindcss.com/docs"
        target="_blank"
        >Docs</a
      >
      <a
        class="mb-2 underline text-indRed"
        href="https://tailwindcss.com/docs/configuration"
        target="_blank"
        >Customizing Config</a
      >
      <a
        class="underline text-indRed"
        href="https://tailwindui.com/components"
        target="_blank"
        >TailwindUI</a
      >
      <div class=" mb-2 text-xs text-gray-500">
        If we wanted prebuilt, fully customizable components
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>
