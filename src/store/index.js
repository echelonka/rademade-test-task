import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        characters: [],
        loadingCharacters: true
    },

    actions: {
        searchCharacters: ({commit}, {search, side}) => {
            commit('setCharactersLoader')
            axios.post('/api/heroes', null, {params: {search, side}}).then(response => {
                commit('setCharacters', response.data)
                commit('setCharactersLoader', false)
            })
        }
    },

    mutations: {
        setCharacters: (state, characters) => state.characters = characters,
        setCharactersLoader: (state, isLoading = true) => state.loadingCharacters = isLoading
    }
})
