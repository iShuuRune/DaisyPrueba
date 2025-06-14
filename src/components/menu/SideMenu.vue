<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProjectsStore } from '@/stores/projects'
import { RouterLink } from 'vue-router'

const projectsStore = useProjectsStore()
const { projects } = storeToRefs(projectsStore)
</script>

<template>
  <ul class="menu bg-base-200 rounded-box w-56">
    <li class="menu-title">Proyectos</li>

    <template v-if="projects.length">
      <li v-for="project in projects" :key="project.id">
        <template v-if="project.tasks.length">
          <details>
            <summary>
              <RouterLink :to="{ name: 'project-detail', params: { id: project.id } }">
                {{ project.name }}
              </RouterLink>
            </summary>
            <ul>
              <li v-for="task in project.tasks" :key="task.id">
                <a>{{ task.name }}</a>
              </li>
            </ul>
          </details>
        </template>
        <template v-else>
          <RouterLink :to="{ name: 'project-detail', params: { id: project.id } }">
            {{ project.name }}
          </RouterLink>
        </template>
      </li>
    </template>

    <template v-else>
      <li class="text-center italic text-sm text-gray-500 px-4 py-2">No hay proyectos</li>
    </template>
  </ul>
</template>