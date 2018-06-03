<template>
    <div>
      {{ isLoading ? 'loading' : '' }}
      <todos :todos="todos" />
    </div>
</template>

<script>
import todos from '../../packages/todos/todos';
import load from '../../packages/load';

export default {
  name: 'index',
  components: {
    todos,
  },
  data() {
    return {
      todos: [],
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    load(this.$datas.todos).then((res) => {
      this.todos = res;
      this.isLoading = false;
    }).catch(() => {});
  },
};
</script>
