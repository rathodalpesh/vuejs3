<template>
<h1>HomeSub</h1>

<slots>
    <template v-slot:header>
        <h1>Alpesh Rathod</h1>
    </template>
    <template v-slot:content>
        <a href="#">Alpesh Rathod</a>
    </template>
    <template v-slot:footer>
        <img src="https://www.drukwerkmax.nl/public/frontend/drukwerkmax/images/DWM_logo_new_cyaan_2.svg" style="width:100px;" />
    </template>
</slots>

<!-- //dafult value -->
<slots></slots>

</template>

<script>
import Slots from './Slots.vue'
export default {
    name: 'HomeSub',
    components: {
        Slots
    }
}
</script>
