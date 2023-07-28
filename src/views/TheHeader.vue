<template>
  <header class="header">
    <div class="header__container-pages">
      <h2 class="page-name">{{ title }}</h2>
      <p class="page-description">see your account information in here!</p>
    </div>
    <label for="search" class="header-input__search-wrapper">
      <input
        type="text"
        class="search-input"
        name="search"
        placeholder="can’t find something? search it here!"
      />
      <button class="input__button-search">
        <img src="../../public/img/input-icon.png" alt="" class="search-img" />
      </button>
    </label>

    <div class="header__account-purshace account-purchase">
      <h3 class="account-purchase__text">make a nwe product</h3>
      <img src="/img/add-square.png" alt="" class="acount-purchase-img" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { Ref, computed } from "vue";
const route = useRoute();

const title = computed(() => route.meta.title);
</script>

<style>
.header {
  align-items: center;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  margin-top: 63px;
}

.header__container-pages {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.page-name {
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  margin: 0px;
  padding: 0px;
}

.page-description {
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  margin: 0px;
  padding: 0px;
  white-space: nowrap;
}
.header-input__search-wrapper {
  background-color: #2e323c;
  border-radius: 12px;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 324px;
}

.search-input {
  padding: 19px 24px;
  position: relative;
  background-color: #2e323c;
  border-radius: 12px;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
}
.input__button-search {
  padding: 0px;
  margin: 0px;
  position: absolute;
  top: 30%;
  left: 85%;
  z-index: 20;
  border: none;
}
.search-img {
  position: absolute;
}

.header__input::placeholder {
  align-items: center;
  color: #fff;
  font-weight: 300;
  font-size: 15px;
}

.header__account-purshace {
  padding: 17px 23px;
  display: flex;
  background-color: #363e52;
  border-radius: 13px;
  align-items: center;
  gap: 20px;
}

.account-purchase__text {
  margin: 0px;
  padding: 0px;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  white-space: nowrap;
}

.acount-purchase-img {
}
</style>
