<template>
  <div
    class="default-button"
  >
    <slot>Submit</slot>
  </div>
</template>

<script setup>
import {  } from 'vue'


</script>

<style lang="scss">
.default-button {
  cursor: pointer;

  border: none;
  border-radius: 10px;

  background: white;
  transition: background .5s;

  color: black;
  text-align: center;

  box-shadow: 0px 0px 5px 2px rgba(34, 60, 80, 0.2);

  // height: 100%;

  padding: 3px 10px;
  box-sizing: border-box;

  user-select: none;
}
</style>
