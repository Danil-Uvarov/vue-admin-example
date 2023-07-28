<template>
  <section class="daschboard_Layout">
    <div class="sidebar">
      <logo />
      <TheMenu></TheMenu>
      <profiles />
    </div>
    <div class="page">
      <TheHeader />
      <slot></slot>
      <information />
    </div>
  </section>
</template>
<script setup lang="ts">
import information from "../views/infotmation.vue";
import TheHeader from "../views/TheHeader.vue";
import TheMenu from "../views/TheMenu.vue";
import profiles from "../views/profiles.vue";
import logo from "../views/logo.vue";
</script>

<style>
.daschboard_Layout {
  display: flex;
  margin: 32px 45px;
  width: 100%;
  height: 100%;
}

.page {
  width: 100%;
}
</style>
