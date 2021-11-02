<template>
  <v-app id="inspire">
    <!--  -->
    <AppDrawer v-model="drawer" app />

    <!-- 
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> -->
    <AppTopBar @change="drawer = !drawer" />

    <v-main class="mx-2">
      <v-container fluid>
        <!-- <router-view /> -->
        <slot />
        <!-- <v-card class="m-4"> -->
        <!-- </v-card> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppDrawer from "../components/app/sections/AppDrawer.vue";
import AppTopBar from "../components/app/sections/AppTopBar.vue";
export default {
  components: { AppDrawer, AppTopBar },
  data: () => ({ drawer: null }),
};
</script>
