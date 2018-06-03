<template>
    <li @click="onClick" ref="li">{{ todo.text }} -- {{ todo.created_at }}</li>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'todo',
  props: {
    todo: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onClick() {
      const oLi = $(this.$refs.li);
      oLi.toggleClass('color');
    },
  },
};
</script>

<style scoped>
.color {
  background-color: red;
}
</style>
