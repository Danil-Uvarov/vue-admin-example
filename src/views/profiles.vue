<template>
  <div class="profiles profil">
    <img src="img/image 2.png" alt="" class="profil_img" />
    <p class="prodil__name">Erfan Rezail</p>
    <img src="/img/arrow-down.png" alt="" class="profiles__arrey" />
  </div>
</template>
<script setup lang="ts"></script>
<style>
.profiles {
  margin-top: 150px;
  padding: 9px 14px;
  background-color: #394359;
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 12px;
}

.profil_img {
}
.prodil__name {
  white-space: nowrap;
  font-size: 20px;
  font-weight: 600;
  color: #ffff;
}
.profiles__arrey {
}
</style>
