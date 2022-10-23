<template>
    <div>
        <div class="box w-4 h-4 bg-red-400">1</div>
        <div class="box w-4 h-4 bg-green-400">2</div>
        <br><br>
        field :<Form v-slot="{errors}">
            <Field name="field" :rules="isRequired" />
            {{errors}}
        </Form>
    </div>
</template>

<script lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import { gsap } from 'gsap'
export default defineComponent({
    component: {
        Form,
        Field,
        ErrorMessage 
    },
    methods: {
        isRequired (value) {
            return value ? true : 'this field is required'
        }
    },
    setup () {
        onMounted(()=>{
            gsap.to('.box', {x: 100, duration: 1 })
        })

        return {}
    }
})
</script>

<style scoped>
</style>