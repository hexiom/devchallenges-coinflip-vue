<script setup lang="ts">
defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <button :disabled="disabled" @click="$emit('onclick')" class="btn">
    <slot />
  </button>
</template>

<style scoped>

.btn {
  cursor: pointer;
  background-color: var(--color-accent);
  color: var(--color-text);

  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.75em 2.5em;
  box-shadow: 0px 4px 0px 0px var(--color-accent-dark);
}

.btn:disabled {
  cursor: not-allowed;
  transform: translateY(4px);
  box-shadow: none;
  background-color: var(--color-btn-disabled);
}

.btn:focus-visible {
  outline: 2px solid var(--color-text);
}

.btn:not(:disabled):hover {
  filter: brightness(95%);
}

.btn:active {
  transform: translateY(4px);
  box-shadow: none;
}

</style>