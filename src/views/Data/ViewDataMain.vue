<script setup lang="ts">
import { useRouteChildren } from "../../composable/RouteChildren";

const children = useRouteChildren();
</script>

<template>
  <h1>Save file data</h1>
  <ul>
    <li v-for="route in children">
      <router-link :to="$route.path + '/' + route.path"> {{ route.meta.name }}</router-link>
    </li>
  </ul>
</template>
../../composable/RouteChildren
