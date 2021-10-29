<template>
  <div><v-btn @click="name()" color="success">text</v-btn></div>
  <!-- <hello-world /> -->
</template>

<script>
export default {
  methods: {
    name() {
      console.log(process.env);
    },
  },
};
</script>
