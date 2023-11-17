import { SET_FAVORITE, SET_LOADING, SET_POKEMONS, SET_VALUE } from "./types";

export const setPokemons = (payload) => ({ type: SET_POKEMONS, payload });
export const SsetLoading = (payload) => ({ type: SET_LOADING, payload });
export const setFavorite = (payload) => ({ type: SET_FAVORITE, payload });
export const setValue = (payload) => ({ type: SET_VALUE, payload });
