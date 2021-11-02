<template>
  <v-app>
    <slot />
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>
