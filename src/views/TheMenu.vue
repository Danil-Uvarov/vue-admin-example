<template>
  <div class="menu">
    <nav class="menu__page">
      <router-link
        v-for="(link, index) in links"
        :key="index"
        class="page__link"
        :to="{ name: link.name }"
      >
        <img :src="link.img" alt="" class="link__img" />
        <p class="link-txt">{{ link.name }}</p>
      </router-link>
    </nav>
  </div>
</template>
<script setup lang="ts">
const links = [
  { name: "dashboard", img: "/img/dasboard_icon.png" },
  { name: "campaigns", img: "/img/img_Campaigns.png" },
  { name: "reports", img: "/img/img_reports.png" },
];
</script>

<style>
.menu {
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.menu__sidebar {
  margin: 0px;
  padding: 0px;
}
.menu__page {
  margin: 0px;
  padding: 0px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 60px;
}

.page__link {
  display: flex;
  gap: 18px;
  align-items: center;
}
.link__img {
}
.link-txt {
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  color: #8b8c91;
}
.active {
  padding: 17px 40px 17px 0;
  background: linear-gradient(
    269.74deg,
    rgba(255, 255, 255, 0.21) -254.09%,
    rgba(255, 255, 255, 0) 99.84%
  );
  border-radius: 16px;
  gap: 20px;
}
</style>
