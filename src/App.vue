<script setup lang="ts">
import { inject, ref } from "vue";
import packageInfo from "../package.json";
import Clipboard from "./components/Clipboard.vue";
import { Game } from "./Game";
import { useSaveFileData } from "./stores/data";
import { SDModifierKind } from "./type/SDModifierKind";
import TheBreadcrumb from "./components/TheBreadcrumb.vue";
import TheMenu from "./components/TheMenu.vue";
import TheLog from "./components/TheLog.vue";

const game = inject<Game>("game");
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
  <div class="wrapper" @some-event.once="console.log('someevent')">
    <div class="header">
      <h1 id="title">
        <TheBreadcrumb />
      </h1>
      <div id="settings">
        <TheLog />
        <button style="font-size: 12px" @click="dialog.showModal()">&#9776;</button>

        <button @click="createSnapshot()">Create Snapshot</button>
        <label for="saveFileImport" class="importLabel">Import Save File</label>
        <input type="file" id="saveFileImport" accept=".txt" @change="importSaveFile" />
        <button id="data-restart" type="reset" @click="hardReset()">Hard Reset</button>
      </div>
    </div>

    <div class="sidebar" id="menu">
      <TheMenu />
    </div>

    <div id="content"><router-view></router-view></div>

    <div id="footer" class="footer">
      Version: <span id="version"> {{ packageInfo.version }} </span> | Game Version 1.2.1.9.21(&alpha;) |
      <a href="https://github.com/pr0cessus/IEH2Calculator">Github Repository Page</a> | Encounter any bug? <a href="https://discordapp.com/users/.processus/">DM me on Discord</a>
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
.small {
  font-size: 16px;
}

.importLabel {
  display: inline-block;
  font-family: NotoSansBlack;
  font-size: 14px;
  font-weight: bold;
  color: #ebebeb;
  background-image: linear-gradient(#656565, #4a4a4a);
  border-top-color: #939393;
  border-bottom-color: #3f3f3f;
  border-left-color: #474747;
  border-right-color: #4e4e4e;
  border-style: outset;
  border-width: 3px;
  height: 21px;
  padding: 0px 10px 0px 10px;
  background-image: linear-gradient(#b45514, #884110);
  border-top-color: #dc8540;
  border-bottom-color: #693816;
  border-left-color: #873e0c;
  border-right-color: #98460f;
}

.importLabel:hover {
  box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.1);
}
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
  display: flex;
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
</style>
