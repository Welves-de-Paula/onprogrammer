<template>
  <v-text-field
    v-bind="$attrs"
    :hide-details="hideDetails"
    v-on="$listeners"
    :dense="dense"
    outlined
  />
</template>

<script>
export default {
  props: {
    hideDetails: {
      default: "auto",
    },
    dense: {
      default: true,
    },
  },
};
</script>
