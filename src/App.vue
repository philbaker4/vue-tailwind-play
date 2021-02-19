<template>
  <div id="app bg-black">
    <div class="px-8 py-4">
      <div>Links between Pages (in the js sense)</div>
      <div class="flex space-x-2 ">
        <a
          class="border p-1 rounded"
          :class="{ 'text-blue-500': path === '/' }"
          href="/"
          >Home</a
        >
        <a
          class="border p-1 rounded"
          :class="{ 'text-blue-500': path === '/basic-demo' }"
          href="/basic-demo"
          >Demo</a
        >
        <a
          class="border p-1 rounded"
          :class="{ 'text-blue-500': path === '/colors' }"
          href="/colors"
          >Colors</a
        >
        <a
          class="border p-1 rounded"
          :class="{ 'text-blue-500': path === '/second/' }"
          href="/second/"
          >Second Home</a
        >
        <a
          class="border p-1 rounded"
          :class="{ 'text-blue-500': path === '/second/basic-demo' }"
          href="/second/basic-demo"
          >Second Demo</a
        >
        <a
          class="border p-1 rounded"
          :class="{ 'text-blue-500': path === '/second/colors' }"
          href="/second/colors"
          >Second Colors</a
        >
      </div>
    </div>
    <div class="px-8 py-4">
      <div>Links within the same page (vue router)</div>
      <div class="flex space-x-2 ">
        <template v-for="route in routes">
          <router-link
            :key="route.path"
            class="border p-1 rounded cursor-pointer"
            :to="route.path"
            v-slot="{ navigate, isExactActive }"
            custom
          >
            <span
              :class="{ 'text-blue-500': isExactActive }"
              @click="navigate"
              >{{ route.name }}</span
            >
          </router-link>
        </template>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    console.log(
      window.location.pathname,
      window.location.pathname.split("/")[1],
      "==="
    );
  },
  data() {
    const path = window.location.pathname;
    const parts = path.split("/");
    const routes = this.$router.options.routes.map(route => {
      return {
        name: route.name,
        path: route.path
      };
    });
    return {
      path,
      urlBase: parts.length > 2 ? parts[1] : "",
      routes
    };
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
