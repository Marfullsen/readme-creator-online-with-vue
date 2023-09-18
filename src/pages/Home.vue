<script setup>
import InputBox from '../components/InputBox.vue';
</script>

<template>
  <div>
    <a href="">
      <img src="/src/assets/readme-creator-icon.webp" class="logo" alt="Vue logo" />
    </a>
  </div>
  <InputBox/>
</template>

<style scoped>
.logo {
  height: 6em;
  margin-bottom: -40px;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
