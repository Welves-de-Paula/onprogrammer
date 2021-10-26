<template>
  <v-app id="inspire">
    <!--  -->
    <AppDrawer v-model="drawer" app />

    <!-- 
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> -->

    <v-app-bar class="d-flex justify-end" app flat absolute color="red">
      <!-- <div class="boxed-container w-full"> -->
      <!-- <div class="d-flex align-center justify-content-end"> -->
      <!-- Left Content -->
      <!-- <v-app-bar-nav-icon
            class="d-block d-lg-none me-2"
            @click="drawer = !isDrawerOpen"
          ></v-app-bar-nav-icon> -->

      <!-- <v-spacer></v-spacer> -->

      <!-- Right Content -->
      <!-- <a
            href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free"
            target="_blank"
            rel="nofollow"
          >
            <v-icon class="ms-6 me-4"> mdi-github </v-icon>
          </a> -->
      <!-- <theme-switcher></theme-switcher> -->
      <v-btn icon small class="ms-3">
        <v-icon> mdi-bell-outline </v-icon>
      </v-btn>
      <AppBarUserMenu />
      <!-- <app-bar-user-menu></app-bar-user-menu> -->
      <!-- </div> -->
      <!-- </div> -->
    </v-app-bar>

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
import AppBarUserMenu from "../components/app/ui/AppBarUserMenu.vue";
import AppDrawer from "../components/app/ui/AppDrawer.vue";
export default {
  components: { AppBarUserMenu, AppDrawer },
  data: () => ({ drawer: null }),
};
</script>