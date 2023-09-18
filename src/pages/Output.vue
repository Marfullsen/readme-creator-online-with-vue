<script setup>
import { useInfoStore } from '../stores/info.js'

const info = useInfoStore()
</script>

<template>
  <article>
    <h1>Output</h1>
    {{ info.typed }}
  </article>
</template>

<style lang="scss" scoped>

</style>