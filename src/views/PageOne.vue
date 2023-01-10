<script setup>
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";

const dropdown = ref(); // we need a DOM node
const show = ref(false);

onMounted(() => {
  autoAnimate(dropdown.value); // thats it!
});
</script>

<template>
  <div ref="dropdown" class="dropdown">
    <strong class="dropdown-label" @click="show = !show">
      Click me to open!
    </strong>
    <p class="dropdown-content" v-if="show">
      Sea of Tranquility a mote of dust suspended in a sunbeam hundreds of
      thousands concept of the number one realm of the galaxies radio telescope.
      As a patch of light descended from astronomers two ghostly white figures
      in coveralls and helmets are softly dancing emerged into consciousness
      Orion's sword encyclopaedia galactica. Another world bits of moving fluff
      network of wormholes muse about network of wormholes with pretty stories
      for which there's little good evidence and billions upon billions upon
      billions upon billions upon billions upon billions upon billions.
    </p>
  </div>
</template>

<style lang="less" scoped>
.body {
  background-color: #160430;
}
.dropdown {
  background-color: #432d68;
  border-radius: 20px;
  font-size: 16px;
  color: #fff;
  padding: 10px;
  dropdown-label {
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .dropdown-content {
    font-weight: bold;
  }
}
</style>
