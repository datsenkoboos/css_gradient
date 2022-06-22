<template>
  <div class="gradient-panel_mobile">

    <GradientInput
        @change-gradient="changeGradient"
    />
    <div class="gradient-buttons">
        <DefaultButton
            class="change-button"
            @click="emit('changeGradient')"
        >
            Randomize
        </DefaultButton>
        <DefaultButton
            :class="copy ? 'copy-button_active' : 'copy-button'"
            @click="emit('copyGradient')"
        >
            {{ copy ? 'Copied!' : 'Copy' }}
        </DefaultButton>
    </div>
    
  </div>
</template>

<script setup>
import { inject, } from 'vue'
import DefaultButton from './UI/DefaultButton.vue';
import GradientInput from './GradientInput.vue'

const copy = inject('copy')
const emit = defineEmits(['changeGradient', 'copyGradient'])

function changeGradient(value) {
    emit('changeGradient', value)
}
</script>

<style lang="scss" scoped>
.gradient-panel_mobile {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;

    width: 100%;

    box-sizing: border-box;
}
.gradient-buttons {
    display: flex;
    align-items: center;
    width: 100%;
}
.copy-button {
    flex: 1;
    border-radius: 0;
    background: #7945fc;
    color: white;
    box-shadow: none;
    &_active {
        flex: 1;
        border-radius: 0;
        background: green;
        color: white;
        box-shadow: none;
    }
}
.change-button {
    flex: 1;
    border-radius: 0;   
    box-shadow: none;
    background: rgb(222, 222, 222);
}
</style>
