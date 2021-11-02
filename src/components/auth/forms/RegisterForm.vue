<template>
  <v-card color="#fff">
    <v-card-text>
      <br />
      <app-text-field v-model="form.name" label="Nome" />
      <br />
      <app-text-field v-model="form.email" label="Email" />
      <br />
      <app-password-field v-model="form.password" label="Senha" />
    </v-card-text>
    <v-card-actions>
      <v-btn
        @click="register()"
        dark
        block
        outlined
        color="primary"
        class="text-capitalize"
        >cadastrar</v-btn
      >
    </v-card-actions>

    <v-card-actions>
      <v-btn @click="registerWithGoogle()" text icon>
        <v-icon color="red">mdi-google</v-icon>
      </v-btn>
      <v-btn @click="registerWithGitHub()" text icon color="black">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
      },
    };
  },

  methods: {
    register() {},
    registerWithGoogle() {},
    registerWithGitHub() {},
  },
};
</script>
<style lang="sass" scoped>


.v-card__actions
    background-color: #fff
    justify-content: center
</style>
