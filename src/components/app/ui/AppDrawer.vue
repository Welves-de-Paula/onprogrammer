<template>
  <v-navigation-drawer dense v-bind="$attrs" v-on="$listeners">
    <v-list nav dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import drawerLinks from "../../../extra/app/drawer-links";
export default {
  components: {},
  props: {},

  data: () => ({
    items: drawerLinks,
  }),

  computed: {},

  methods: {},
};
</script>

<style lang="sass" scoped>
.divider
  background-color: #009CDE
  color: #009CDE
  border-color: #009CDE
</style>
