<template>
  <div class="image-container">
    <img :src="url" :alt="alt" v-if="url" class="image-style" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  node: any;
}>();

const url = props.node.url;
const alt = props.node.alt;
</script>

<style scoped>
.image-style {
  display: block;
}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}
</style>
