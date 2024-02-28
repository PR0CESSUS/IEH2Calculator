<script setup lang="ts">
import { inject, ref } from "vue";
import { Router } from "vue-router";
import packageInfo from "../package.json";
import { routes } from "./routes";
import Clipboard from "./components/Clipboard.vue";
import { Game } from "./Game";
import { useSaveFileData } from "./stores/data";
import { SDModifierKind } from "./type/SDModifierKind";

const game = inject<Game>("game");
const router = inject<Router>("router");
const dialog = ref<HTMLDialogElement>();

function importSaveFile(event: Event & { target: HTMLInputElement }) {
  if (!event.target.files) return;
  const script = document.createElement("script");
  script.src = "./SaveFileDencrypt.js";
  script.onload = function () {
    console.log("script loaded");
    const filereader = new FileReader();
    filereader.readAsText(event.target.files[0]);
    filereader.onloadend = () => {
      //
      const data = new globalThis.SaveFileDencrypt(filereader.result as string).data;
      //@ts-ignore

      localStorage.setItem("SaveFileData", JSON.stringify({ ...useSaveFileData().$state, ...data }));
      // game.data.source.$state =
      window.alert("Save File loaded! Reloading page");
      // console.log(game.data.source.currentHero);

      location.reload();
    };
  };
  document.head.appendChild(script);
}
function hardReset() {
  if (window.confirm("Clear data?")) {
    localStorage.clear();
    window.alert("Data cleared, Reload page if you wish to start over");
  }
}

function createSnapshot() {
  localStorage.setItem("SaveFileSnapshot", JSON.stringify(useSaveFileData().$state));
  location.reload();
}
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <h1 id="title"><router-link to="/">IEH2Calculator</router-link>{{ router.currentRoute.value.path }}</h1>
      <div id="settings">
        <button class="btn btn-gray" style="font-size: 12px" @click="dialog.showModal()">&#9776;</button>

        <button id="data-snapshot" class="btn btn-gray" @click="createSnapshot">Create Snapshot</button>
        <label for="saveFileImport" class="btn btn-orange">Import Save File</label>
        <input type="file" id="saveFileImport" accept=".txt" @change="importSaveFile" />
        <button id="data-restart" type="reset" class="btn btn-gray" @click="hardReset">Hard Reset</button>
      </div>
    </div>

    <nav class="sidebar" id="menu">
      <router-link
        v-for="route in routes.filter((route) => {
          return route.path != '/';
        })"
        :to="route.path"
      >
        {{ route.name }}
      </router-link>
    </nav>

    <div id="content"><router-view></router-view></div>

    <div id="footer" class="footer">
      Version: <span id="version"> {{ packageInfo.version }} </span> | Game Version (1.2.1.8) | <a href="https://github.com/pr0cessus/IEH2Calculator">Github Repository Page</a> |
      Encounter any bug? <a href="https://discordapp.com/users/.processus/">DM me on Discord</a>
    </div>
  </div>
  <dialog ref="dialog" @mousedown="if (($event.target as HTMLDialogElement).nodeName == dialog.nodeName) dialog.close();" style="background-color: #3a3a3a; color: #fff">
    <div style="padding: 10px">
      <input type="checkbox" v-model="game.data.source.isSuperDungeon" class="checkbox" name="isSuperDungeon" />
      Super Dungeon<br />

      <input type="checkbox" v-model="game.data.source.superDungeonPowerupIsActive" class="checkbox" name="superDungeonPowerupIsActive" />
      Active Powerup<br />

      <input type="checkbox" v-model="game.data.source.isBlessing" class="checkbox" name="isBlessing" />
      Blessings<br />

      <hr />
      <h4>SD Modifiers</h4>

      <input type="checkbox" v-model="game.data.source.isActiveSdModifiers[950 + SDModifierKind.SwapATKWithDEF]" class="checkbox" name="SwapATKWithDEF" />
      Swap ATK/MATK with DEF/MDEF<br />

      <input type="checkbox" v-model="game.data.source.isActiveSdModifiers[950 + SDModifierKind.RemoveSDUpgrade1]" class="checkbox" name="RemoveSDUpgrade1" />
      Remove the effect of SD Damage-type and Fury upgrades in SD Upgrade I<br />
      <input type="checkbox" v-model="game.data.source.isActiveSdModifiers[950 + SDModifierKind.ReducePowerupEffect]" class="checkbox" name="ReducePowerupEffect" />
      Reduce the effect of powerups by

      {{
        game.data.source.sdModifierValues[950 + SDModifierKind.ReducePowerupEffect] == 0
          ? "50.00%"
          : game.data.source.sdModifierValues[950 + SDModifierKind.ReducePowerupEffect] == 1
          ? "90.00%"
          : "99.00%"
      }}
      <br />
      &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <input type="range" min="0" max="2" v-model.lazy.number="game.data.source.sdModifierValues[950 + SDModifierKind.ReducePowerupEffect]" name="ReducePowerupEffectValue" />
      <br />
      <input type="checkbox" v-model="game.data.source.isActiveSdModifiers[950 + SDModifierKind.RemoveSDPowerupPassives]" class="checkbox" name="RemoveSDPowerupPassives" />
      Remove the permanent effects of SD Powerups
      <br />
      <input
        type="checkbox"
        v-model="game.data.source.isActiveSdModifiers[950 + SDModifierKind.RemoveEquipmentEffectBonuses]"
        class="checkbox"
        name="RemoveEquipmentEffectBonuses"
      />
      Remove Equipment Effect Bonus
    </div>
  </dialog>
  <Clipboard />
</template>

<style scoped>
nav a.router-link-active {
  color: rgb(255, 251, 0);
}
.wrapper {
  display: grid;
  /* grid-gap: 10px; */
  grid-template-columns: 151px auto;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer  footer";
  color: #444;
}
.header,
.footer {
  color: #f3f3f6;
  padding: 5px;
}

#title {
  display: inline-block;
}

#settings {
  float: right;
  padding-top: 15px;
}
.sidebar {
  grid-area: sidebar;
  background-color: #232c37;
}

#content {
  padding: 5px 0 15px 5px;
  grid-area: content;
  /* background-color: #232c37; */

  border-left: #fff 1px solid;
  color: #f3f3f6;
}

.header {
  grid-area: header;
  border-bottom: #fff 1px solid;
  padding: 0;
}

.footer {
  grid-area: footer;
  /* background-color: #232c37; */
  border-top: #fff 1px solid;
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
  font-size: 20px;
  color: #ffffff;
  margin: 0;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 5px;
  padding-right: 5px;
  background-image: linear-gradient(#a0a0a0, #535353);
}

nav a:hover {
  color: #fffbcf;
}
</style>
