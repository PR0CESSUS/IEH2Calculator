<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "0.1.30",
  },
});
</script>
<template>
  <h2>0.1.30</h2>
  <ul>
    <li>Changed router splitting every route into chunks. It produce single file now</li>
    <li>Added collapse component to Challenge data so it doesn't take so much space</li>
  </ul>
</template>
