<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="task.name"
              :counter="10"
              label="Name"
              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-btn class="text-capitalize" color="primary" @click="addTask()"
              >Add task</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-list-item v-for="(item, index) in tasks" :key="index">
              <v-list-item-content>
                <v-list-item-title
                  >{{ item.name }}
                  <v-btn icon color="error" @click="deletTask(index)">
                    <v-icon>mdi-delete-forever</v-icon>
                  </v-btn>

                  <v-btn icon color="success" @click="editItem(index)">
                    <v-icon>mdi-pencil-outline</v-icon>
                  </v-btn></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import vueConfig from "../../vue.config";

export default {
  data() {
    return {
      valid: true,

      task: { name: null, status: null },
      tasks: [],
      taskIndex: null,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },

  methods: {
    addTask() {
      if (this.$refs.form.validate()) {
        if (this.taskIndex > 0) {
          this.updateTasks();
          console.log("updasde");
        } else {
          this.storeTasks();
          console.log("store");
        }
      }
    },

    deletTask(index) {
      this.$delete(this.tasks, index);
    },

    editItem(index) {
      this.task = this.tasks[index];
      this.taskIndex = index;
    },

    storeTasks() {
      this.tasks.push({
        name: this.task.name,
        status: this.task.status,
      });
      this.task.name = null;
    },

    updateTasks(index) {
      console.log(this.task);
      this.$set(this.tasks, this.taskIndex, this.task);
      this.taskIndex = null;
      this.task.name = null;
    },

    resetTasks() {},
  },
};
</script>
