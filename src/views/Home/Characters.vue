<template>
    <div class="characters">
        <input type="text" placeholder="Search" class="characters__search" v-model="search" @input="searchCharacters">
        <div class="radio-group">
            <input type="radio" id="all" value="" v-model="side">
            <label for="all">All</label>
        </div>
        <div class="radio-group">
            <input type="radio" id="dark" value="dark" v-model="side">
            <label for="dark">Dark</label>
        </div>
        <div class="radio-group">
            <input type="radio" id="light" value="light" v-model="side">
            <label for="light">Light</label>
        </div>
        <transition-group name="fade">
            <div v-if="!loading" class="characters__list" key="characters-list">
                <Character
                    v-for="character in characters"
                    :key="character.name"
                    :name="character.name"
                    :height="character.height"
                    :mass="character.mass"
                    :hairColor="character.hair_color"
                    :side="character.side"
                    :skinColor="character.skin_color"
                    :eyeColor="character.eye_color"
                    :birthYear="character.birth_year"
                    :gender="character.gender"
                />
            </div>
            <div class="characters__loader" v-else key="loader">
                <div class="characters__loader-spin"></div>
            </div>
            <div class="characters__empty" v-if="!characters.length && !loading" key="empty">
                <img src="../../assets/darth-vader-dark.svg" alt="No results">
                <p>Sorry, no results. Try another search</p>
            </div>
        </transition-group>
    </div>
</template>

<script>
    import Character from '../../components/Character'
    import {mapState} from 'vuex'
    import _ from 'lodash'

    export default {
        name: 'Characters',
        components: {Character},

        data: () => ({
            search: '',
            side: ''
        }),

        watch: {
            side() {
                this.searchCharacters()
            }
        },

        methods: {
            searchCharacters: _.debounce(function() {
                this.$store.dispatch('searchCharacters', {search: this.search, side: this.side})
            }, 500)
        },

        computed: mapState({
            characters: state => state.characters,
            loading: state => state.loadingCharacters
        }),


        created() {
            this.$store.dispatch('searchCharacters', {search: '', side: ''})
        }
    }
</script>

<style scoped lang="sass">
    @import '../../sass/base/variables'
    @import '../../sass/base/mixins'

    .characters
        width: 100%
        max-width: 1400px
        margin: 0 auto
        padding: 30px
        box-sizing: border-box
        &__search
            width: 300px
            display: block
            padding: 10px 20px 10px 35px
            border: 1px solid
            border-radius: 5px
            color: $shark
            background-image: url('../../assets/search.svg')
            background-repeat: no-repeat
            background-size: 15px
            background-position: 10px
        &__list
            margin: 30px 0 0
            display: grid
            grid-template-columns: 1fr
            grid-gap: 50px
            @include tablets
                grid-template-columns: repeat(2, 1fr)
            @include desktop
                grid-template-columns: repeat(3, 1fr)
        &__loader
            width: 100%
            height: 110px
            margin: 100px 0 0
            position: relative
            &-spin
                width: 20px
                height: 20px
                left: calc(50% - 50px)
                background-color: $shark
                border: 40px solid transparent
                border-top-color: $white
                border-bottom-color: $white
                border-radius: 50%
                position: absolute
                animation: animate .5s linear infinite
                @keyframes animate
                    0%
                        transform: rotate(0deg)
                    100%
                        transform: rotate(360deg)
        &__empty
            padding: 30px
            text-align: center
            border-radius: 10px
            box-shadow: 0 1px 5px rgba($black, .2)
            img
                width: 200px

    .fade-enter-active
        transition: opacity .2s ease .2s

    .fade-leave-active
        transition: opacity .2s

    .fade-enter, .fade-leave-to
        opacity: 0
</style>
