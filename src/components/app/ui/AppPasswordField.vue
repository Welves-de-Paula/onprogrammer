<template>
  <app-text-field
    v-bind="$attrs"
    hide-details="auto"
    v-on="$listeners"
    dense
    :type="type"
    :append-icon="icon"
    @click:append="toggleShowPassword()"
  />
</template>

<script>
export default {
  data: () => ({
    showPassword: false,
  }),
  computed: {
    type() {
      return this.showPassword ? "text" : "password";
    },
    icon() {
      return this.showPassword ? "mdi-eye" : "mdi-eye-off";
    },
  },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
