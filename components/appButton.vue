<template>
    <button :class="[`btn btn-${variant}`, { loading: loading }]">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
    // const props = defineProps({
    //     variant: {
    //         type: String,
    //         default: 'primary'
    //     },
    //     loading: {
    //         type: Boolean,
    //         default: false
    //     }
    // })
    interface Props {
        variant?:string;
        loading?:boolean;
    }
    const props=withDefaults(defineProps<Props>(), {
        variant: "primary",
        loading: false
    })
</script>

<style scoped>

</style>