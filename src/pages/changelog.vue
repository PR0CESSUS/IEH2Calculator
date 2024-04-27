<script setup lang="ts">
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Changelog",
    root: true,
    submenu: false,
    version: true,
  },
});
</script>

<template>
  <router-view></router-view>
</template>
