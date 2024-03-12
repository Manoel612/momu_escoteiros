<template>
    <h1 class="text-center text-h1 font-weight-thin mt-16">Eventos</h1>

  <div class="d-flex justify-center">
    <div class=" mt-16 w-75">
      <VCalendar :attributes='attrs' expanded is-dark/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const selectedColor = ref('blue');
const todos = ref([
  {
    description: 'Take Noah to basketball practice.',
    isComplete: false,
    dates: new Date(2024,1,1), // Every Friday
    
  },
]);

const attrs = computed(() => [
  ...todos.value.map(todo => ({
    dates: todo.dates,
    highlight: true,
    popover:{
      label: todo.description
    },
  }))
])
</script>
