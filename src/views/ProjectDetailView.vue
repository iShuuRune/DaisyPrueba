<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectsStore } from '@/stores/projects'

const route = useRoute()
const projectsStore = useProjectsStore()
const projectId = ref(route.params.id as string)

watch(
  () => route.params.id,
  (newId) => {
    projectId.value = newId as string
  }
)

const project = computed(() =>
  projectsStore.projects.find(p => p.id === projectId.value)
)

const newTaskName = ref("")

function addTask() {
  if (project.value && newTaskName.value.trim()) {
    project.value.tasks.push({
      id: Date.now().toString(),
      name: newTaskName.value.trim(),
    })
    newTaskName.value = ""
  }
}

function toggleTaskCompleted(task: any) {
  if (task.completedAt) {
    task.completedAt = undefined
  } else {
    task.completedAt = new Date()
  }
}
</script>

<template>
  <div v-if="project">
    <h2 class="text-2xl font-bold mb-4">{{ project.name }}</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tarea</th>
          <th>Completada</th>
          <th>Fecha completada</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in project.tasks" :key="task.id">
          <td>{{ task.id }}</td>
          <td :class="{ 'line-through text-gray-400': task.completedAt }">{{ task.name }}</td>
          <td>
            <input
              type="checkbox"
              :checked="!!task.completedAt"
              @change="toggleTaskCompleted(task)"
            />
          </td>
          <td>
            <span v-if="task.completedAt">
              {{ new Date(task.completedAt).toLocaleString() }}
            </span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input
              v-model="newTaskName"
              @keyup.enter="addTask"
              type="text"
              class="input input-bordered w-full"
              placeholder="Agregar nueva tarea y presiona Enter"
            />
          </td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <p>Proyecto no encontrado.</p>
  </div>
</template>