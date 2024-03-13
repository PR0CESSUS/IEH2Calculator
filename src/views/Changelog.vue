<script setup lang="ts"></script>

<template>
  <h2>0.1.25</h2>
  <li>Fixed broken quest link</li>
  <h2>0.1.23</h2>
  <ul>
    <li>Added Hackmanite and Turquoise input to <router-link to="/expedition">Expedition</router-link> for easier comparision</li>
    <li>Added reward per sec (yellow value in front) to expedition breakdown</li>
    <li>Added <router-link to="/help">Find MAX DPS</router-link> button to equipment edit window</li>
    <li>Added <router-link to="/data/challange">Challange</router-link> to Data page</li>
    <li>Added submenu to Data link</li>
    <li>Changed breadcrumb component</li>
    <li>Fixed stats showing as green/red in Stats panel after changing enchanements, pesky rounding!</li>
  </ul>
  <h2>0.1.21</h2>
  <ul>
    <li>Added <router-link to="/data/town">Town</router-link> to Data page</li>
  </ul>
  <h2>0.1.20</h2>
  <ul>
    <li>Added <router-link to="/data/ability">Ability</router-link> to Data page</li>
    <li>Added <router-link to="/data/quest">Quest</router-link> to Data page</li>
  </ul>
  <h2>0.1.18</h2>
  <ul>
    <li>Some changes to skill breakdown layout plus added percentage comparison from snapshot</li>
    <li>Extended Data-><router-link to="/data/sd_upgrade">SD Upgrade</router-link> to all Super Dungeon upgrades</li>
  </ul>
  <h2>0.1.16</h2>
  <ul>
    <li>Image path fix</li>
  </ul>
  <h2>0.1.15</h2>
  <ul>
    <li>Moved Enchanter Finder page to Equipment page under magnifying glass button</li>
    <li>Changed Heroes select html element to hero eye images</li>
    <li>Changed Equipment Breakdown style</li>
  </ul>
</template>
<style scoped>
h2 {
  border-bottom: 1px solid #fff;
  font-size: 16px;
}
h2::before {
  content: "version ";
}
ul {
  font-size: 12px;
}

a {
  color: #a7e6ff;
}
</style>
