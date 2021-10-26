<template>
  <component :is="layout">
    <router-view />
  </component>
</template>


<script>
import AppLayout from "/src/layouts/AppLayout";
export default {
  name: "App",

  components: {
    AppLayout,
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
