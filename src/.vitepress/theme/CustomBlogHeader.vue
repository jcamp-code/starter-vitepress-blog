<script setup lang="ts">
import { usePosts } from '@jcamp/vitepress-blog-theme'

const data = usePosts()
</script>

<template>
  <div class="w-full text-blue-200">
    Newest Content: {{ data.posts[0].title }}
  </div>
</template>
