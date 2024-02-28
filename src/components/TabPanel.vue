<script setup lang="ts">
import { VNode, getCurrentInstance, onMounted, provide, reactive, ref } from "vue";

interface TabProps {
  title: string;
}
const props = defineProps<{ selectedIndex?: number }>();
// console.log(props.selectedIndex);

const state = reactive({
  selectedIndex: props.selectedIndex | 0,
  tabs: [] as VNode<TabProps>[],
  count: 0,
});
const self = ref();
// const selectedIndex = ref(props.selectedIndex | 0);
const tabs = ref();

const emits = defineEmits(["tabChange"]);

// emits("someEvent", "test");

provide("TabsProvider", state);
onMounted(() => {
  self.value = getCurrentInstance().proxy;
  tabs.value = self.value.$slots.default();
  state.tabs = self.value.$slots.default().filter((child) => child.type.__name === "TabItem");
});

function selectTab(i: number) {
  state.selectedIndex = i;
  emits("tabChange", i);
}
</script>

<template ref="self">
  <ul>
    <li v-for="(tab, index) in state.tabs" :key="index" @click="selectTab(index)" :class="state.selectedIndex === index ? 'active' : ''">{{ tab.props.title }}</li>
  </ul>

  <div>
    <slot> </slot>
  </div>
</template>

<style scoped>
div {
  margin: 0;
  padding: 0;
}

ul {
  display: inline-block;
  margin-bottom: 5px;
  margin-top: 0px;
  margin-left: 0;
  padding: 0;
  font-size: 0;
}

li {
  display: inline;
  font-size: 14px;
  background-image: linear-gradient(#2b487f, #20365f);
  margin-left: 0px;
  padding: 5px 5px 5px 5px;
  background-color: #264374;
  border-style: outset;
  border-width: 2px;
  cursor: pointer;

  border-top-color: #5476ae;
  border-bottom-color: #203151;
  border-left-color: #203865;
  border-right-color: #203c6e;
}

li:hover {
  filter: brightness(120%);
}

.active {
  color: yellow;
}
</style>
../data2 ../stores/global
