<template>
    <div class="flex flex-col space-y-3 justify-center items-center">
        <h1>my base components</h1>
        <AppButton :variant="ButtonVariantEnum.primary" >دکمه</AppButton>
    </div>
</template>

<script setup lang="ts">
    import {ButtonVariantEnum} from '~/types'


</script>

<style scoped>

</style> 