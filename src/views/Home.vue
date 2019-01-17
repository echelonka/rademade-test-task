<template>
    <div class="home">
        <Navigation/>
        <Header/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from '../components/Navigation'
    import Header from '../components/Header'

    export default {
        name: 'Home',
        components: {Header, Navigation}
    }
</script>

<style scoped lang="sass">
    @import '../sass/base/variables'
    @import '../sass/base/mixins'

    .home
        width: 100vw
        min-height: 100vh
        display: grid
        grid-template-columns: 1fr
        grid-template-rows: 40px 1fr
        background-color: $lightGray
        @include tablets
            grid-template-columns: 255px 1fr
            grid-template-rows: 80px 1fr
</style>
