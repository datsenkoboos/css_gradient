<template>
  <div :class="isMobile ? 'gradient-input_mobile' : 'gradient-input'">
    <span class="static">
        linear-gradient(
    </span>
    <DefaultInput
        max="360"
        v-model="gradientValues.angle"
    />
    <span class="static">
        deg, rgb(
    </span>
    
    <DefaultInput
        max="255"
        v-model="gradientValues.firstColor.r"
    />
    <span class="static">
        ,
    </span>
    
    <DefaultInput
        max="255"
        v-model="gradientValues.firstColor.g"
    />
    <span class="static">
        ,
    </span>
    
    <DefaultInput
        max="255"
        v-model="gradientValues.firstColor.b"
    />
    <span class="static">
        ), rgb(
    </span>
    
    <DefaultInput
        max="255"
        v-model="gradientValues.secondColor.r"
    />
    <span class="static">
        ,
    </span>
    
    <DefaultInput
        max="255"
        v-model="gradientValues.secondColor.g"
    />
    <span class="static">
        ,
    </span>
    
    <DefaultInput
        max="255"
        v-model="gradientValues.secondColor.b"
    />
    <span class="static">
        ))
    </span>
    
  </div>
</template>

<script setup>
import { inject } from 'vue'
import DefaultInput from './UI/DefaultInput.vue';

const emit = defineEmits(['changeGradient'])

const gradientValues = inject('gradientValues')
const isMobile = inject('isMobile')
</script>

<style lang="scss">
.gradient-input {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 2px 10px;
    border-radius: 10px;
    box-sizing: border-box;
    input {
        font-size: 1.1rem;
        width: 40px;
        &:focus {
            outline: none;
        }
    }
    &_mobile {
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 5px 10px;
        box-sizing: border-box;
        input {
            font-size: 1.1rem;
            width: 100%;
            &:focus {
                outline: none;
            }
        }
        .static {
            display: block;
            width: 100%;
            text-align: center;
        }
    }
}
</style>
