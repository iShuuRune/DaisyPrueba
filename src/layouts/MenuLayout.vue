<script setup lang="ts">
import Top from '@/components/menu/TopMenu.vue'
import Side from '@/components/menu/SideMenu.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col h-screen">
    <Top />

    <div class="flex flex-1 overflow-hidden">
      <Side />

      <div class="flex-1 relative overflow-auto p-6">
        <RouterView />
      </div>
    </div>
  </div>
</template>
