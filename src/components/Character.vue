<template>
    <div class="character">
        <div class="character__image">
            <img src="../assets/darth-vader.svg" alt="Character">
        </div>
        <div class="character__info">
            <div class="character__info-name">{{name}}</div>
            <div class="character__info-description">
                <div>Height: {{height}}</div>
                <div>Mass: {{mass}}</div>
                <div>Hair Color: {{hairColor}}</div>
                <div>Side: {{side}}</div>
                <div>Skin Color: {{skinColor}}</div>
                <div>Eye Color: {{eyeColor}}</div>
                <div>Birth Year: {{birthYear}}</div>
                <div>Gender: {{gender}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Character',
        props: {
            name: String,
            height: String,
            mass: String,
            hairColor: String,
            side: String,
            skinColor: String,
            eyeColor: String,
            birthYear: String,
            gender: String
        }
    }
</script>

<style scoped lang="sass">
    @import '../sass/base/variables'

    .character
        border-radius: 10px
        overflow: hidden
        box-shadow: 0 1px 5px rgba($black, .2)
        transition: box-shadow .3s ease-in-out
        &:hover
            box-shadow: 0 2px 10px rgba($black, .4)
        &__image
            height: 200px
            background-color: $darkBlue
            display: flex
            justify-content: center
            img
                width: 50px
        &__info
            padding: 20px
            &-name
                margin: 0 0 10px
                font-weight: bold
</style>
