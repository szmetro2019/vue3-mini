<template>
  <div class="about">
    <context-holder />
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts" setup>
import { message } from 'ant-design-vue';
import { onMounted } from 'vue';
const [messageApi, contextHolder] = message.useMessage();
message.config({
  top: `100px`,
  duration: 5,
  maxCount: 1,
  prefixCls: 'my-message',
});
onMounted(() => {
  messageApi.info('Hello, Ant Design Vue!');
});
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
