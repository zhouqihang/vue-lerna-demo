import todos from './todos';

class Datas {
  constructor(data) {
    this.data = data;
  }
  install(Vue) {
    Object.assign(Vue, {
      $datas: this.data,
    });
    Object.assign(Vue.prototype, {
      $datas: this.data,
    });
  }
}

export default new Datas({
  todos,
});

