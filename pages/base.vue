<template>
    <div class="flex flex-col space-y-3 justify-center items-center">
        <h1>my base components</h1>
        <AppButton @click="modal = true" variant="secondary" >دکمه</AppButton>
        <app-modal v-model="modal">
            <h1>hi</h1>
        </app-modal>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { ButtonVariantEnum } from '~/types'
    export default defineComponent({
            setup() {
            const modal = ref(false)
            return {
                modal
            }
        }
    })


</script>

<style scoped>

</style> 