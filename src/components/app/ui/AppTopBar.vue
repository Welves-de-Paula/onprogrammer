<template>
  <v-app-bar app flat absolute>
    <v-app-bar-nav-icon @click="$emit('change')" />
    <v-toolbar-title>{{ $route.name }}</v-toolbar-title>

    <v-spacer />

    <!-- <v-btn icon small class="ms-3">
      <v-icon> mdi-bell-outline </v-icon>
    </v-btn> -->
    <AppBarUserMenu />
  </v-app-bar>
</template>

<script>
// import AppNotificationBadge from "./AppNotificationBadge.vue";
import AppBarUserMenu from "./AppBarUserMenu.vue";
export default {
  components: { AppBarUserMenu },
  data() {
    return {
      messages: 4,
      show: false,
    };
  },
  props: {},
};
</script>

<style></style>
