<script setup lang="ts">
import { routes } from "../routes";
import AppDropdown from "./AppDropdown.vue";
</script>

<template>
  <nav>
    <template v-for="route in routes.filter((route) => route.path != '/')">
      <template v-if="route.children?.length">
        <AppDropdown>
          <template #trigger
            ><router-link :to="route.path"> {{ route.meta.name }} </router-link></template
          >
          <template #content>
            <!-- {{ route.children }} -->
            <template v-for="childrenRoute in route.children"
              ><router-link class="submenu" :to="route.path + '/' + childrenRoute.path" v-if="!childrenRoute.meta.default">{{ childrenRoute.meta.name }}</router-link></template
            >
          </template>
        </AppDropdown>
      </template>
      <template v-else="!route.children?.length">
        <router-link :to="route.path"> {{ route.meta.name }} {{ route.children?.length ? "+" : "" }} </router-link>
      </template>
    </template>
  </nav>
</template>
<style scoped>
.pop {
  position: relative;
  width: 100px;
  height: 100px;
}
.submenu {
  font-size: 12px;
  padding: 2px 5px;
  border-width: 2px;
  border-top-color: #808080;
  background-color: #808080;
  background-image: none;
}

.submenu:hover {
  filter: brightness(120%);
}

nav a {
  display: block;
  text-align: center;
  text-decoration: none;
  border-width: 4px 4px 4px 4px;
  border-radius: 0px;
  border-color: #b6b6b6 #8f8f8f #9e9e9e #969696;
  border-style: outset;
  background-clip: padding-box;
  background-color: #232c37;
  font-size: 16px;
  color: #ffffff;
  margin: 0;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 5px;
  padding-right: 5px;
  background-image: linear-gradient(#868686, #535353);
}

nav a:hover {
  color: #fffbcf;
  filter: brightness(110%);
}

.router-link-active {
  color: #ffea04;
}
</style>
