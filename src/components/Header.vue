<template>
    <div class="header">
        <img src="../assets/logo.svg" alt="Rademade" class="header__logo">
        <h1 class="header__title">test task</h1>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped lang="sass">
    .header
        height: 40px
        padding: 0 30px
        display: flex
        align-items: center
        grid-column: 1 / 2 span
        background-color: #2c3e50
        @media screen and (min-width: 768px)
            height: 80px
        &__logo
            width: auto
            height: 25px
            margin: 0 10px 0 0
            @media screen and (min-width: 768px)
                height: 50px
        &__title
            margin: 2px 0 0
            color: #fff
            font-size: 16px
            @media screen and (min-width: 768px)
                font-size: 32px
</style>
