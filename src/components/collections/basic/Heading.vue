<template>
  <component :is="`h${depth}`" :key="node.key" :id="id" style="position: relative;">
    <span v-if="enumerator" className="select-none mr-3">
      {{ enumerator }}
    </span>
    <span>
      <slot></slot>
    </span>
    <a style="width: 0; user-select: none;" @click="onClickLink" :href="href"></a>
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  node: any
}>();
const { enumerator, depth, key, identifier, html_id } = props.node;
const id = html_id || identifier || key;
const href = `#${id}`

const onClickLink = (event: Event) => {
  event.preventDefault();
}
</script>

<style scoped>

</style>