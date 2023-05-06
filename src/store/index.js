import { createSlice, configureStore } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        url: `https://pokeapi.co/api/v2/pokemon/1`,
        count: 0,
        id: 0,
        image: 'Image not found',
        species: '???',
        type1: '???',
        type2: '???',
        height: '???',
        weight: '???'
    },
    reducers: {
        increment(state) {
            state.count++;
            state.url = `https://pokeapi.co/api/v2/pokemon/${state.count}`;
        },
        decrement(state) {
            state.count--;
            state.url = `https://pokeapi.co/api/v2/pokemon/${state.count}`;
        },
        selected(state, action) {
            state.count = action.payload;
            state.url = `https://pokeapi.co/api/v2/pokemon/${action.payload}`;
        }
    }
});

const store = configureStore({ reducer: pokemonSlice.reducer});

export const counterActions = pokemonSlice.actions;

export default store;