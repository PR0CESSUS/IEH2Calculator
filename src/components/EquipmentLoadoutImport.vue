<script setup lang="ts">
import { Game } from "@/Game";
import { inject, ref } from "vue";

const game = inject<Game>("game");
const test = ref();
function EquipmentLoadoutImport(event: Event & { target: HTMLInputElement }) {
  if (!event.target.files) return;

  const filereader = new FileReader();
  filereader.readAsText(event.target.files[0]);
  filereader.onloadend = () => {
    game.data.inventory.PasteLoadout(JSON.parse(filereader.result as string));
    event.target.value = null;
  };
}
</script>

<template>
  <label for="EquipmentLoadoutImport" class="importLabel">Import</label>
  <input type="file" id="EquipmentLoadoutImport" accept=".json" @change="EquipmentLoadoutImport" ref="test" />
</template>
<style scoped>
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
</style>
