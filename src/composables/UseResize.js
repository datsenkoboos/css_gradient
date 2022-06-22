import { ref, onMounted, onUnmounted } from 'vue';

//Function accepts width where mobile ver. starts
export default function useResize(bound) {
    const mobile = ref(false)

    function update() {
        mobile.value = window.innerWidth < bound
    }
    update()
    onMounted(() => {
        window.addEventListener('resize', update);
    })
    onUnmounted(() => {
        window.removeEventListener('resize', update);
    })
    //Returns state (is window width < 600 or not)
    return mobile 
}   