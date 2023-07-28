<template>
  <div class="content">
    <section class="content__block-text block-text">
      <h3 class="block-text__header">Special premium account!</h3>
      <p class="block-text__description">
        With a special premium account, you can do very interesting things! By
        purchasing this account, special features will be activated for you that
        you will be amazed to see!
      </p>
      <section class="block-text__buttons buttons">
        <button class="button-purchase">
          <p class="button-purchase__text">Account purchase</p>
          <img
            src="/img/shopping-cart.png"
            alt=""
            class="button-purchase__img"
          />
        </button>
        <button class="button-features">
          <p class="button_features__text">View features</p>
          <img src="/img/flash.png" alt="" class="button-features__img" />
        </button>
      </section>
    </section>
    <section class="content__block-img-hero hero">
      <img src="/img/backround-hero.png" alt="" class="hero-background" />
      <img src="/img/background(2).png" alt="" class="hero-background-circle" />
      <img src="/img/Virtual_reality-amico.png" alt="" class="hero-img" />
    </section>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.content {
  margin-top: 100px;
  background-color: #2e323c;
  border-radius: 29px;
  display: flex;
  gap: 14px;
}
.content__block-text {
  margin-left: 33px;
  display: flex;
  flex-direction: column;
  margin-top: 74px;
}
.block-text__header {
  padding: 0px;
  margin: 0px;
  font-weight: 700;
  font-size: 32px;
  color: #ffffff;
}
.block-text__description {
  padding: 0px;
  margin: 0px;
  font-weight: 400;
  font-size: 17px;
  color: #ffffff;
  margin-top: 40px;
}
.block-text__buttons {
  display: flex;
  left: 0;
  margin-top: 40px;
}
.button-purchase {
  background-color: #363e52;
  padding: 17px 24px;
  gap: 24px;
  align-items: center;
  display: flex;
  border: 1px solid #363e52;
  border-radius: 13px;
}
.button-purchase__text {
  margin: 0px;
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
  white-space: nowrap;
}
.button-purchase__img {
}
.button-features {
  background-color: #363e52;
  padding: 0px;
  padding: 17px 23px;
  align-items: center;
  display: flex;
  border: 1px solid #363e52;
  border-radius: 13px;
  margin-left: 39px;
  gap: 24px;
}
.button_features__text {
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  white-space: nowrap;
}
.button-features__img {
}
.content__block-img-hero {
  margin-top: 13px;
  margin-right: 33px;
  margin-bottom: 13px;
  position: relative;
}
.hero {
}
.hero-background {
}
.hero-background-circle {
  position: absolute;
  left: 20px;
  top: 0;
}
.hero-img {
  position: absolute;
  left: 35px;
  top: 35px;
}
</style>
