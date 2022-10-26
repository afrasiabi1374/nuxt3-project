<template>
    <!-- موجودبودvariant یعنی اگه  -->
    <button :class="{ [`btn btn-${variant}`]: variant !== undefined,  loading: loading }">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
    import {ButtonVariantEnum} from '~/types'
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
        variant?:ButtonVariantEnum;
        loading?:boolean;
    }
    const props=withDefaults(defineProps<Props>(), {
        loading: false
    })
</script>

<style scoped>

</style>