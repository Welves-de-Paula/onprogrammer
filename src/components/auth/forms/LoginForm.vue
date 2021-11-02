<template>
  <v-card color="#fff">
    <v-card-text>
      <br />

      <app-text-field v-model="form.email" label="Email" /><br />
      <app-password-field v-model="form.password" label="Senha" />
    </v-card-text>

    <v-card-actions>
      <v-btn
        @click="login()"
        dark
        block
        outlined
        color="primary"
        class="text-capitalize"
        >Entrar</v-btn
      >
    </v-card-actions>

    <v-card-actions>
      <v-btn text icon>
        <v-icon @click="loginWithGoogle()" color="red">mdi-google</v-icon>
      </v-btn>
      <v-btn @click="loginWithGitHub()" text icon color="black">
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
        email: null,
        password: null,
      },
    };
  },
  methods: {
    login() {},
    loginWithGoogle() {},
    loginWithGitHub() {},
  },
};
</script>

<style lang="sass" scoped>
.v-card__actions
    background-color: #fff
    justify-content: center//     padding: 16px !important
</style>
