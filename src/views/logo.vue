<template>
  <div class="logo">
    <section class="header__line">
      <span class="line-yellow"></span>
      <span class="line-blue"></span>
      <span class="line-red"></span>
    </section>
    <header class="menu__meader mader">
      <h2 class="mader-PAM">PAM</h2>
      <p class="mader-description">Purchase account management</p>
    </header>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.logo {
  display: flex;
  margin-top: 57px;
}
.header__line {
  display: flex;
  gap: 7px;
  transform: rotate(180deg);
}

.line-red {
  width: 2px;
  height: 24px;
  background-color: #cf2458;
  display: block;
}

.line-blue {
  width: 2px;
  height: 40px;
  background-color: #11bca9;
}

.line-yellow {
  width: 2px;
  height: 51px;
  background-color: #f3bc72;
}

.menu__meader {
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  margin-left: 26px;
}
.mader-PAM {
  margin: 0px;
  padding: 0px;
  font-weight: 700px;
  font-size: 25px;
  color: #fff;
}
.mader-description {
  white-space: nowrap;
  margin: 0px;
  padding: 0px;
  margin-top: 11px;
  font-weight: 400;
  font-size: 13px;
  color: #fff;
}
</style>
