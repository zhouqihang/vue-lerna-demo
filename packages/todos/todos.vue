<template>
    <ul>
      <todo v-for="(todo, index) in todos" :key="index" :todo="todo" />
    </ul>
</template>

<script>
import todo from 'todo';

export default {
  name: 'todos',
  components: {
    todo,
  },
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
