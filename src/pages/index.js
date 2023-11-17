import { Inter } from "next/font/google";
import Searcher from "@/components/Searcher";
import PockeList from "@/components/PockeList";
import Logo from "@/components/Logo";

import { pokemonReducer } from "@/reducers/pokemons";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { logger } from "@/middlewares";

const inter = Inter({ subsets: ["latin"] });

const composeEnhancer = compose(applyMiddleware(logger));

export default function Home() {
  const store = createStore(pokemonReducer, composeEnhancer);
  return (
    <Provider store={store}>
      <main
        className={`flex min-h-screen flex-col items-center p-16 pt-12 ${inter.className}`}
      >
        <Logo />
        <Searcher />
        <PockeList />
      </main>
    </Provider>
  );
}
