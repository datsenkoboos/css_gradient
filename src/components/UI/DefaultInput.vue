<template>
  <input
    type="text"
    class="default-input"
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  >
</template>

<script setup>
import { watch } from 'vue'

// input validation
watch(() => props.modelValue, (newValue, oldValue) => {
  if ( newValue.length > 3 || isNaN(+newValue) ) {
    emit('update:modelValue', oldValue)
    return
  }
  // max value check
  if ( newValue > +props.max ) {
    emit('update:modelValue', +props.max)
    return
  }
  emit('update:modelValue', +newValue)
})

const props = defineProps({
    modelValue: [String, Number],
    max: [String, Number],
})
const emit = defineEmits(['update:modelValue'])


// debounce if needed
// let debounceMain

// function debounceInput(event) {  
//   clearTimeout(debounceMain)
//   debounceMain = setTimeout(() => {
//     emit('update:modelValue', event.target.value)
//   }, 250, event)
// }
</script>

<style lang="scss">
.default-input {
  cursor: pointer;

  border: none;
  border-radius: 10px;

  background: rgb(216, 216, 216);
  transition: background .2s;
  color: black;

  margin: 0;
  padding: 0;
  text-align: center;

  box-sizing: border-box;
  &:hover, &:focus {
    background: rgb(192, 192, 192);
  }
}
</style>
