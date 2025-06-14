<script setup lang="ts">
import { ref } from "vue";
import FloattingButtom from "@/components/global/FloattingButtom.vue";
import IconAddUser from "@/components/icons/IconAddUser.vue";
import ReusableModal from "@/components/global/ReusableModal.vue";
import { useProjectsStore } from "@/stores/projects";

const modalRef = ref<InstanceType<typeof ReusableModal> | null>(null);
const projectStore = useProjectsStore();
const projectName = ref("");

const openModal = () => {
  modalRef.value?.open();
};

function addProject() {
  if (projectName.value.trim()) {
    projectStore.addProject(projectName.value);
    projectName.value = "";
    modalRef.value?.close();
  }
}

function completedTasks(project: { tasks: any[] }) {
  return project.tasks.filter((t) => t.completedAt).length;
}
function progressPercent(project: { tasks: any[] }) {
  if (!project.tasks.length) return 0;
  return Math.round((completedTasks(project) / project.tasks.length) * 100);
}
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Name</th>
          <th>Progreso</th> 
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in useProjectsStore().projects" :key="project.id">
          <th>{{ project.name }}</th>
          <td>
            <div v-if="project.tasks.length">
              <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  class="bg-blue-600 h-2.5 rounded-full"
                  :style="{ width: progressPercent(project) + '%' }"
                ></div>
              </div>
              <div class="text-xs text-gray-500">
                {{ completedTasks(project) }} de
                {{ project.tasks.length }} tareas completadas ({{
                  progressPercent(project)
                }}%)
              </div>
            </div>
            <div v-else class="text-xs text-gray-400">Sin tareas</div>
          </td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <th>Name</th>
          <th>Progreso</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>

  <FloattingButtom position="bottom-left" @click="openModal">
    <IconAddUser />
  </FloattingButtom>

  <ReusableModal ref="modalRef">
    <template #title> Agregar usuario </template>

    <template #content>
      <div class="form-control mb-4">
        <label class="label">Projecto</label>
        <input
          @keyup.enter="addProject"
          v-model="projectName"
          type="text"
          class="input input-bordered w-full"
          placeholder="Escribe el nombre"
        />
      </div>
    </template>

    <template #actions>
      <form method="dialog">
        <button class="btn btn-outline">Cancelar</button>
      </form>
      <button @click="addProject" class="btn btn-primary">Aceptar</button>
    </template>
  </ReusableModal>
</template>
