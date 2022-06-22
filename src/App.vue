<template>
  <GradientPanel
    v-show="!isMobile"
    @copy-gradient="copyGradient"
    @change-gradient="randomGradientValues"
  />
  <div
    class="gradient"
    :style="`background: linear-gradient(${gradientValues.angle}deg, rgb(${gradientValues.firstColor.r},${gradientValues.firstColor.g},${gradientValues.firstColor.b}), rgb(${gradientValues.secondColor.r},${gradientValues.secondColor.g},${gradientValues.secondColor.b}))`"
  >
  </div>
  <GradientPanelMobile
    v-show="isMobile"
    @copy-gradient="copyGradient"
    @change-gradient="randomGradientValues"
  />
</template>

<script setup>
import { ref, provide, onBeforeMount, reactive } from 'vue'

// composables
import random from '@/composables/RandomNumber.js'
import useResize from '@/composables/UseResize.js'

import GradientPanel from './components/GradientPanel.vue';
import GradientPanelMobile from './components/GradientPanelMobile.vue';

// mobile version global state
const isMobile = useResize(910)

// global copy state (used for copy button animation)
const copy = ref(false)

// global gradient values
const gradientValues = reactive({
    angle: 0,
    firstColor: {
        r: 0,
        g: 0,
        b: 0,
    },
    secondColor: {
        r: 0,
        g: 0,
        b: 0,
    },
})

// generate random gradient
function randomGradientValues() {
  gradientValues.angle = random(90)
  for (let key in gradientValues.firstColor) {
    gradientValues.firstColor[key] = random(255)
    gradientValues.secondColor[key] = random(255)
  }
}

function copyGradient() {
  copy.value = true
  navigator.clipboard.writeText(`linear-gradient(${gradientValues.angle}deg, rgb(${gradientValues.firstColor.r},${gradientValues.firstColor.g},${gradientValues.firstColor.b}), rgb(${gradientValues.secondColor.r},${gradientValues.secondColor.g},${gradientValues.secondColor.b}))`).then(() => {
    setTimeout(() => {
      copy.value = false
    }, 350)
  })
}

// first load initialization
onBeforeMount(() => {
  randomGradientValues()
})

provide('copy', copy)
provide('gradientValues', gradientValues)
provide('isMobile', isMobile)
</script>

<style lang="scss">
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: url('@/assets/font/montserrat.woff2');
}  

html {
  font-family: Poppins, sans-serif;
  font-size: 10px;
}
html, body, #app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
}
#app {
  display: flex;
  flex-direction: column;
}
.gradient {
  flex-grow: 1;
  width: 100%;

}
</style>
