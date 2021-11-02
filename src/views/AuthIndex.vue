<template>
  <v-app id="default-auth">
    <v-main>
      <div
        style="margin-top: 10%"
        class="d-flex justify-center align-content-center"
      >
        <v-col cols="12" md="3">
          <v-tabs v-model="tab" fixed-tabs dark background-color="transparent">
            <v-tab class="text-capitalize">Login</v-tab>
            <v-tab class="text-capitalize">Criar conta</v-tab>
          </v-tabs>
          <LoginForm v-show="tab == 0" />
          <RegisterForm v-show="tab == 1" />
        </v-col>
      </div>
    </v-main>
  </v-app>
</template>
<script>
import LoginForm from "@/components/auth/forms/LoginForm.vue";
import RegisterForm from "@/components/auth/forms/RegisterForm.vue";

export default {
  components: { LoginForm, RegisterForm },
  data() {
    return {
      tab: null,
      // form: {
      //   username: null,
      //   password: null,
      // },
    };
  },

  methods: {
    // login() {
    //   this.$auth.login(this.form);
    // },
  },
};
</script>
