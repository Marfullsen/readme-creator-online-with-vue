<script setup>
import { ref } from 'vue'
import InputBox from '../components/InputBox.vue';

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <InputBox/>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
