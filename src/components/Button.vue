<script setup lang="ts">
defineProps<{
  
}>()
</script>

<template>
  <button @click="$emit('on-click')" class="btn">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  background-color: var(--color-accent);
  padding: 0.5rem 2rem;

  box-shadow: 0px 4px 0px 0px var(--color-accent-dark);
}
</style>