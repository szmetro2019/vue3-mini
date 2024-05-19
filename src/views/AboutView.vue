<template>
  <div class="about">
    <a-space wrap>
      <a-button type="primary">Primary Button</a-button>
      <a-button>Default Button</a-button>
      <a-button type="dashed">Dashed Button</a-button>
      <a-button type="text">Text Button</a-button>
      <a-button type="link">Link Button</a-button>
    </a-space>
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {});
</script>
<style></style>
