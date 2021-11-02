<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import AppLayout from "/src/layouts/AppLayout";
import AuthLayout from "/src/layouts/AuthLayout";
export default {
  name: "App",

  components: {
    AppLayout,
    AuthLayout,
  },
  data: () => ({
    //
  }),

  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>
