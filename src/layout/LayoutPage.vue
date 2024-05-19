<template>
  <section>
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in" appear>
        <keep-alive :include="cacheList">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
// keep-alive 暂缓
const cacheList = ref([]);
</script>
<style scoped></style>
