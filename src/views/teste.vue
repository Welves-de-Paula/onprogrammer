<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-btn
            class="text-capitalize"
            color="primary"
            @click="handleOpenTaskForm()"
            >Add task</v-btn
          >
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-list dense shaped>
            <v-list-item-group>
              <v-list-item v-for="(task, index) in tasks" :key="index">
                <v-list-item-action>
                  <v-checkbox :input-value="active"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ task.name }} </v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn
                    icon
                    color="success"
                    @click="handleOpenTaskForm({ task, index })"
                  >
                    <v-icon>mdi-pencil-outline</v-icon>
                  </v-btn>
                </v-list-item-action>

                <v-list-item-action>
                  <v-btn icon color="error" @click="deletTask(index)">
                    <v-icon>mdi-delete-forever</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
    </v-container>

    <TaskForm
      ref="TaskForm"
      @save="storeTasks($event)"
      @update="updateTasks($event)"
    />
  </div>
</template>

<script>
import TaskForm from "../components/task/forms/TaskForm.vue";
export default {
  components: { TaskForm },
  data() {
    return {
      task: { name: null, status: null },
      tasks: [
        { name: "Tarefa 1", status: null },
        { name: "Tarefa 2", status: null },
      ],
      taskIndex: null,
    };
  },

  methods: {
    handleOpenTaskForm(task) {
      this.$refs.TaskForm.openForm(task);
    },

    // addTask() {
    //   // if (this.$refs.form.validate()) {
    //   // if (this.taskIndex != null) {
    //   // this.storeTasks();
    //   // }
    //   // }
    //   //     this.resetTasks();
    //   //   }
    //   // }
    //   // this.updateTasks();
    // },

    deletTask(index) {
      this.$delete(this.tasks, index);
    },

    // editItem(index) {
    //   this.task = this.tasks[index];
    //   this.taskIndex = index;
    // },

    storeTasks(task) {
      this.tasks.push({
        name: task.name,
        status: task.status,
      });
    },

    updateTasks(data) {
      this.$set(this.tasks, data.index, data.task);
    },
  },
};
</script>
