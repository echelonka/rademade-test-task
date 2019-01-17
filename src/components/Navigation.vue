<template>
    <div class="navigation">
        <ul class="navigation__list">
            <router-link :to="{name: 'Characters'}" tag="li" class="navigation__list-item">Characters</router-link>
            <li class="navigation__list-item">About Star Wars</li>
            <li class="navigation__list-item">About Rademade</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>

<style scoped lang="sass">
    @import '../sass/base/mixins'

    .navigation
        height: 100vh
        padding: 30px 0
        background-color: #2c3e50
        position: fixed
        transform: translateX(-100%)
        @include tablets
            height: auto
            grid-row: 2
            position: relative
            transform: none
        &__list
            margin: 0
            padding: 0
            top: 30px
            list-style: none
            position: sticky
            &-item
                padding: 20px 30px
                color: #fff
                cursor: pointer
                transition: background-color .3s ease-in-out
                &:hover, &.router-link-active
                    background-color: rgba(black, .2)
</style>
