<template>
  <div class="app">
    <div class="gradients">
      <div class="gradient-right-top"></div>
      <div class="gradient-left-top"></div>
      <div class="gradient-right-bottom"></div>
      <div class="gradient-left-bottom"></div>
    </div>
    <div class="wrapper__project">
      <component :is="layout">
        <RouterView></RouterView>
      </component>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import dashboardLayout from "./layouts/dashboardLayout.vue";

const route = useRoute();

const layout = computed(() => {
  if (route.meta.layout === "dashboardLayout") {
    return dashboardLayout;
  }
  return dashboardLayout;
});
</script>

<style>
.app {
  position: relative;
  background: #22262f;
  border-radius: 34px;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}

.gradients {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  left: 0;
  right: 0;
}
.gradient-right-top {
  position: absolute;
  right: 0px;
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 110px;
  background-color: rgba(33, 160, 146, 0.5);
  filter: blur(65px);
}
.gradient-right-bottom {
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  max-width: 70px;
  max-height: 120px;
  background-color: rgba(33, 160, 146, 0.5);
  filter: blur(50px);
}
.gradient-left-top {
  position: absolute;
  left: 0px;
  top: 50px;
  width: 100%;
  height: 100%;
  max-width: 60px;
  max-height: 180px;
  background-color: rgba(33, 160, 146, 0.5);
  filter: blur(60px);
}
.gradient-left-bottom {
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  max-width: 60px;
  max-height: 90px;
  background-color: rgba(33, 160, 146, 0.5);
  filter: blur(60px);
}
.wrapper__project {
  display: flex;
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
}
</style>
