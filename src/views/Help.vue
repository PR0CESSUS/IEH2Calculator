<script setup lang="ts"></script>

<template>
  <h3>FAQ</h3>
  Most function require using Import Save File otherwise it would require manually adding hundreds of values
  <ol>
    <li><p>How to adjust Ruby Converter ratio without importing Save File?</p></li>
    <div style="padding-top: 10px; padding-bottom: 10px">Go to <router-link to="/data/challange">Challange</router-link> page and enter values required for specific ratio.</div>

    <li>How to use equipment calculator?</li>
    <div style="padding-top: 10px; padding-bottom: 10px">
      <ul>
        <li>Create Stat Snapshot</li>
        <li>Click on item and modify it, new values should be shown in Stats Panel (it compares current values to Snapshot)</li>
        <li>You can use Copy button to copy values to internal clipboard and use CTRL+V while hovering on another item to paste them</li>
        <li>You can copy entire item by using CTRL+C and CTRL+V</li>
      </ul>
    </div>
    <li>Why Find MAX DPS button does not include some enchantments?</li>
    <div style="padding-top: 10px; padding-bottom: 10px">
      <ul>
        <li>To reduce unnecessary computation it only iterate over enchantments that has potential to increase DPS</li>
        <li>Only enchantments below or equal to Enemy level are chosen</li>
        <li>Element enchantments are chosen based on first Skill or Oil equipped</li>
        <li>Knowledge enchantements are chosen based on Enemy species selected</li>
        <li>Basic Stats enchantements are choosen based on Swap ATK/MATK with DEF/MDEF modifier</li>
        <li>Blessing enchantements are choosen based on Blessings checkbox under <button class="small">&#9776;</button></li>
      </ul>
    </div>
  </ol>
</template>

<style scoped>
a {
  color: #a7e6ff;
}
</style>
../data2 ../Game
