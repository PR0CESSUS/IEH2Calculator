<script setup lang="ts"></script>

<template>
  <h3>FAQ</h3>
  Most function require using Import Save File otherwise it would require manually adding hundreds of values
  <ol>
    <li><p>How to adjust Ruby Converter ratio without importing Save File?</p></li>
    <div style="padding-top: 10px; padding-bottom: 10px">
      Type into browser javascript console (TotalModifier is number)<br /><textarea cols="120" rows="2" spellcheck="false" style="resize: none; overflow: hidden">
globalThis.Game.data.source.maxModifierCleareds[0] = TotalModifier</textarea
      >
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
  </ol>
</template>

<style scoped></style>
../data2 ../Game
