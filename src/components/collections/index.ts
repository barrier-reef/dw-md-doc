import ComponentA from "./directives/ComponentA.vue";
import ComponentB from "./directives/ComponentB.vue";
import Root from "./Root.vue";

export const componentMapper: Record<string, any> = {
  root: Root,
  a: ComponentA,
  b: ComponentB,
};
