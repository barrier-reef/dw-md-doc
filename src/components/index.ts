import TreeRender from "./TreeRender.vue";
const components = [TreeRender];

const install = function (Vue: any) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default install;
