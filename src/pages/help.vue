<script setup lang="ts">
import { useRoute } from "vue-router";
import { definePage } from "vue-router/auto";

const currentRoute = useRoute();

definePage({
  meta: {
    name: "Help",
    root: true,
  },
});

// console.log(currentRoute.hash);

// onMounted(() => {
//   if (currentRoute.hash) {
//     const test = document.querySelector(currentRoute.hash);
//     console.log(test);
//     //.classList.add("selected")
//   }
// });
</script>

<template>
  <h3>FAQ</h3>
  Most function require using Import Save File otherwise it would require manually adding hundreds of values
  <ol>
    <li><p>How to adjust Ruby Converter ratio without importing Save File?</p></li>
    <div style="padding-top: 10px; padding-bottom: 10px">
      Go to <router-link to="/data/challenge/superdungeon">Challange</router-link> page and enter values required for specific ratio.
    </div>

    <li>How to use equipment calculator?</li>
    <div style="padding-top: 10px; padding-bottom: 10px">
      <ul>
        <li>Create Stat Snapshot</li>
        <li>Click on item and modify it, new values should be shown in Stats Panel (it compares current values to Snapshot)</li>
        <li>You can use Copy button to copy values to internal clipboard and use CTRL+V while hovering on another item to paste them</li>
        <li>You can copy entire item by using CTRL+C and CTRL+V</li>
      </ul>
    </div>

    <li><RouterLink to="#OptimizeEnchantments" :class="{ selected: currentRoute.hash == '#OptimizeEnchantments' }">How Optimize Enchantments function works?</RouterLink></li>
    <div style="padding-top: 10px; padding-bottom: 10px">
      <ul>
        <li>It test every selected enchantments against selected optimizer type to find best enchantment</li>
        <li>If equipment has Required Hero level anvil, function will increase its value durning testing so it does not trigger Equipment Tenacity</li>
        <li>It uses max values for anvil Equipment Effect, Effect increment per level and Equipment bonus level based on SD ritual</li>
        <li>
          Default selected enchantments are chosen based on certain criteria
          <ul>
            <li>Element enchantments are chosen based on first Skill or Oil equipped</li>
            <li>Knowledge enchantements are chosen based on Enemy species selected</li>
            <li>Basic Stats enchantements are choosen based on Swap ATK/MATK with DEF/MDEF modifier</li>
            <li>Blessing enchantements are choosen based on Blessings checkbox under <button class="small">&#9776;</button></li>
          </ul>
        </li>
      </ul>
    </div>
  </ol>
</template>

<style scoped>
.selected {
  color: #ffea04;
}
a {
  color: #a7e6ff;
}
</style>
