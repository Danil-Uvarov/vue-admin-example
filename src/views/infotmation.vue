<template>
  <div class="information">
    <section class="information__block">
      <div class="information__total-img">
        <img src="/img/profile-2user.png" alt="" class="total__img" />
        <div class="information__quantyty">
          <p class="quantyty__description">total equaring</p>
          <span class="quantyty__total">125K</span>
        </div>
      </div>
      <div class="information__graphs-button">
        <div class="information__graphs-wrapper">
          <div class="information__graphs">
            <img src="/img/graphs.png" alt="" class="graphs__img" />
            <div class="graphs__interest">2.12 %</div>
          </div>
          <p class="graphs__description">this month</p>
        </div>
        <button class="information__button">
          <p class="button_txt">see info</p>
        </button>
      </div>
    </section>

    <section class="information__block">
      <div class="information__total-img">
        <img src="/img/profile-2user.png" alt="" class="total__img" />
        <div class="information__quantyty">
          <p class="quantyty__description">total equaring</p>
          <span class="quantyty__total">125K</span>
        </div>
      </div>
      <div class="information__graphs-button">
        <div class="information__graphs-wrapper">
          <div class="information__graphs">
            <img src="/img/graphs.png" alt="" class="graphs__img" />
            <div class="graphs__interest">2.12 %</div>
          </div>
          <p class="graphs__description">this month</p>
        </div>
        <button class="information__button">
          <p class="button_txt">see info</p>
        </button>
      </div>
    </section>

    <section class="information__block">
      <div class="information__total-img">
        <img src="/img/profile-2user.png" alt="" class="total__img" />
        <div class="information__quantyty">
          <p class="quantyty__description">total equaring</p>
          <span class="quantyty__total">125K</span>
        </div>
      </div>
      <div class="information__graphs-button">
        <div class="information__graphs-wrapper">
          <div class="information__graphs">
            <img src="/img/graphs.png" alt="" class="graphs__img" />
            <div class="graphs__interest">2.12 %</div>
          </div>
          <p class="graphs__description">this month</p>
        </div>
        <button class="information__button">
          <p class="button_txt">see info</p>
        </button>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts"></script>

<style>
.information {
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.information__block {
  background-color: #2e374b;
  display: flex;
  border-radius: 25px;
  padding: 25px;
  gap: 40px;
}
.information__total-img {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.information__graphs-button {
  display: flex;
  flex-direction: column;
}
.total__img {
  background-color: #077e71;
  border-radius: 50%;
  max-width: 24px;
}
.information__graphs-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.information__graphs {
  display: flex;
  gap: 15px;
}
.graphs__img {
}
.graphs__interest {
  color: #fff;
  font-weight: 600;
  font-size: 20px;
}
.graphs__description {
  color: #b6b7bc;
  font-weight: 300;
  font-size: 13px;
}
.information__quantyty {
  display: flex;
  flex-direction: column;
  margin-top: 17px;
}
.quantyty__description {
  color: #b6b7bc;
  font-weight: 300;
  font-size: 15px;
}
.quantyty__total {
  color: #fff;
  font-size: 30px;
  font-weight: 600;
}
.information__button {
  margin-top: 17;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border: 1px solid #077e71;
  background-color: #077e71;
  border-radius: 16px;
}
.button_txt {
  font-weight: 400;
  font-size: 20px;
  color: #fff;
}
</style>
