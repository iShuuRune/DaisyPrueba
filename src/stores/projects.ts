import { defineStore } from "pinia";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

interface Project {
  id: string;
  name: string;
  tasks: Task[];
}

interface Task {
  id: string;
  name: string;
  completedAt?: Date;
}

export const useProjectsStore = defineStore("projects", () => {
  const projects = ref<Project[]>([
    {
      id: "uuid-" + uuidv4(),
      name: "Project 1",
      tasks: [
        { id: "1", name: "Task 1" },
        { id: "2", name: "Task 2" },
      ],
    },
    {
      id: "uuid-" + uuidv4(),
      name: "Project 2",
      tasks: [
        { id: "3", name: "Task 3" },
        { id: "4", name: "Task 4" },
      ],
    },
  ]);

  function addProject(name: string) {
    if (!name) {
      throw new Error("Project name cannot be empty");
    }

    projects.value.push({
      id: "uuid-" + uuidv4(),
      name,
      tasks: [],
    });
  }

  return { projects, addProject };
});
