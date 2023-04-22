<script setup lang="ts">
import { usePosts } from '@jcamp/vitepress-blog-theme/composables/usePosts'
const data = usePosts()
</script>

<template>
  <div class="w-full bg-blue-200">Test Local Component {{ data }}</div>
</template>
