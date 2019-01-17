<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="sass">
    @import 'sass/base/variables'
    @import 'sass/components/radio-group'

    body
        margin: 0
        font-family: 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        color: $shark

    input
        -webkit-appearance: none
        outline: none
        font-size: 16px

    .app
        display: grid
        grid-template-columns: 255px 1fr
</style>
