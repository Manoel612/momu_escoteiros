<template>
  <div class="d-flex justify-center">
    <VCalendar :attributes='attrs'/>
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
/* const attrs = ref([
   {
    key: 'today',
    highlight: true,
    dates: new Date(2024,0,1),
    popover: {
      label: 'Take Noah to basketball practice.',
      visibility:'click'
    },
  },
]); */
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