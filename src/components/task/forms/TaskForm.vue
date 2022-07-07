<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> {{ title }} Tarefa</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col>
              <v-text-field :rules="[rules.required]" v-model="form.name">
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">
          Disagree
        </v-btn>
        <v-btn
          color="green darken-1"
          v-if="taskIndex == null"
          text
          @click="save()"
        >
          Save
        </v-btn>
        <v-btn
          color="green darken-1"
          v-if="taskIndex != null"
          text
          @click="update()"
        >
          Updade</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      taskIndex: null,
      valid: true,
      form: {},
      baseForm: {
        name: null,
      },
      dialog: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  mounted() {
    this.reset();
  },

  computed: {
    title() {
      return this.taskIndex != null ? "Atualizar" : "Nova"; // if ternario

      // if (this.taskIndex) {
      //   return "Atualizar";
      // } else {
      //   return "Novo";
      // }
    },
  },

  methods: {
    async openForm(task = null) {
      await this.reset();
      if (task != null) {
        this.setTask(task);
      }
      this.dialog = true;
    },
    setTask(task) {
      this.taskIndex = task.index;
      this.form = JSON.parse(JSON.stringify(task.task)); // clona valores
    },

    save() {
      if (this.$refs.form.validate()) {
        this.$emit("save", this.form);
        this.dialog = false;
      }
    },

    update() {
      console.log(this.form);
      if (this.$refs.form.validate()) {
        this.$emit("update", { task: this.form, index: this.taskIndex });
        this.dialog = false;
      }
    },

    reset() {
      this.form = JSON.parse(JSON.stringify(this.baseForm));
      this.taskIndex = null;
    },
  },
};
</script>

<style>
</style>