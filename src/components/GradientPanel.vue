<template>
  <div class="gradient-panel">
    <DefaultButton
        class="change-button"
        @click="emit('changeGradient')"
    >
        Randomize
    </DefaultButton>

    <GradientInput
        @change-gradient="changeGradient"
    />

    <DefaultButton
        :class="copy ? 'copy-button_active' : 'copy-button'"
        @click="copyGradient"
    >
        {{ copy ? 'Copied!' : 'Copy' }}
    </DefaultButton>
  </div>
</template>

<script setup>
import { inject, } from 'vue'
import DefaultButton from './UI/DefaultButton.vue';
import GradientInput from './GradientInput.vue'

import throttle from '@/composables/FunctionThrottle';

const copy = inject('copy')
const emit = defineEmits(['changeGradient', 'copyGradient'])

function changeGradient(value) {
    emit('changeGradient', value)
}

const copyGradient = throttle(() => {
    emit('copyGradient')
    console.log('2')
    
    }, 750)

// function copyGradient() {
//     console.log(11)
//     // emit('copyGradient')
// }
</script>

<style lang="scss" scoped>
.gradient-panel {
    position: absolute;
    top: 35px;
    left: 50%;
    transform:translate(-50%, -50%);
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;

    border-radius: 10px;

    width: 100%;
    // max-width: 760px;

    gap: 10px;

    box-sizing: border-box;
    padding-inline: 10px;
}
.copy-button {
    background: #7945fc;
    color: white;
    width: 95px;
    &_active {
        background: green;
        color: white; 
    }
}
</style>
