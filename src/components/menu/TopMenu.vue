<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
\

<template>
  <header>

    <div class="navbar bg-base-200 shadow-sm">
    <a class="btn btn-ghost text-xl">
      <RouterLink to="/">Projects App</RouterLink>
    </a>

    <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink :to="{ name: 'features' }">Features</RouterLink>
      <RouterLink to="/pricing">Pricing</RouterLink>
    </nav>
    
    </div>
  </header>
</template>

