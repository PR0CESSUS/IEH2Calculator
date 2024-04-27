<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Data",
    root: true,
    submenu: true,
  },
});
</script>
<template>
  <router-view></router-view>
</template>
