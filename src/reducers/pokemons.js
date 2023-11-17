import {
  SET_FAVORITE,
  SET_LOADING,
  SET_POKEMONS,
  SET_VALUE,
} from "@/actions/types";

const initialState = {
  pokemons: [],
  loading: false,
  favorite: false,
  value: "",
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_FAVORITE:
      return { ...state, favorite: action.payload };
    case SET_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
