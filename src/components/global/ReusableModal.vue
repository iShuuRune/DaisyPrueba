<script setup>
import { ref, defineExpose } from 'vue'

const modalRef = ref(null)

const open = () => {
  modalRef.value?.showModal()
}
const close = () => {
  modalRef.value?.close()
}

defineExpose({ open, close })
</script>

<template>
  <dialog ref="modalRef" class="modal">
    <div class="modal-box">
      <!-- Slot del título -->
      <h3 class="text-lg font-bold">
        <slot name="title" />
      </h3>

      <!-- Slot del contenido -->
      <div class="py-4">
        <slot name="content" />
      </div>

      <!-- Slot para los botones -->
      <div class="modal-action">
        <slot name="actions" />
      </div>
    </div>
  </dialog>
</template>
