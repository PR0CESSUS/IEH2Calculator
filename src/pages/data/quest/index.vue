<script setup lang="ts">
import { useRouteChildren } from "@use/RouteChildren";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "noname",
    default: true,
  },
});

const childern = useRouteChildren();
</script>

<template>
  <ul>
    <li v-for="route in childern">
      <RouterLink :to="$route.name + route.path">{{ route.meta?.name }}</RouterLink>
    </li>
  </ul>
</template>
