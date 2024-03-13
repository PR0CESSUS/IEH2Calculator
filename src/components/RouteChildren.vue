<script setup lang="ts">
import { useRouter } from "vue-router";
const props = defineProps<{ base: string }>();
const router = useRouter();

function getChildren(base: string) {
  const result = router.getRoutes().filter((route) => route.path == base)[1].children;

  return result;
}

// console.log(router.currentRoute.value.matched[0].children);
</script>

<template>
  <div style="margin-bottom: 10px">
    <template v-for="route in getChildren(props.base)">
      <RouterLink class="tab" :class="{ yellow: $route.meta?.parent == route.meta.name }" :to="props.base + '/' + route.path">{{ route.meta.name }}</RouterLink>
      <!-- meta.parent {{ route.meta?.parent }} ||| {{ $route.meta?.parent == route.name }}<br /> -->
    </template>
  </div>
</template>
<style scoped>
.tab {
  font-size: 14px;
  background-image: linear-gradient(#2b487f, #20365f);
  margin-left: 0px;
  padding: 2px 5px 2px 5px;
  background-color: #264374;
  border-style: outset;
  border-width: 2px;
  cursor: pointer;
  display: inline-block;
  border-top-color: #5476ae;
  border-bottom-color: #203151;
  border-left-color: #203865;
  border-right-color: #203c6e;
}
.tab:hover {
  filter: brightness(120%);
}

.router-link-exact-active {
  color: #ffea04;
}
</style>
