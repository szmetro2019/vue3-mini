<template>
  <main>1</main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      count: 1,
      a: 1,
      b: 2,
      c: {
        d: 4,
      },
      e: 5,
      f: 6,
    };
  },
  computed: {
    // 只读
    aDouble() {
      return this.count * 2;
    },
    // 可写
    aPlus: {
      get() {
        return this.count + 1;
      },
      set(v: number) {
        this.count = v - 1;
      },
    },
  },
  watch: {
    // 侦听根级属性
    a(val, oldVal) {
      console.log(`new: ${val}, old: ${oldVal}`);
    },
    c: {
      handler(val, oldVal) {
        console.log(val, oldVal, 'c changed');
      },
      deep: true,
    },
    // 该回调将会在侦听开始之后立即调用
    e: {
      handler(val, oldVal) {
        console.log(val, oldVal, 'e changed');
      },
      immediate: true,
    },
  },
  beforeCreate() {
    console.log('-beforeCreate-');
  },

  created() {
    console.log('-created-');
  },
  beforeMount() {
    console.log('-beforeMount-');
  },
  mounted() {
    console.log('-mounted-');
  },
  beforeUpdate() {
    console.log('-beforeUpdate-');
  },
  updated() {
    console.log('-updated-');
  },
  beforeUnmount() {
    console.log('-beforeUnmount-');
  },
  unmounted() {
    console.log('-unmounted-');
  },
  activated() {
    console.log('-activated-');
  },
  deactivated() {
    console.log('-deactivated-');
  },
});
</script>
