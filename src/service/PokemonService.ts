import {fetchBaseQuery, createApi  } from "@reduxjs/toolkit/dist/query/react";
import { IPokemon, IPokemonItem } from "../models/IPokemon";

export const pokemonAPI = createApi({
    reducerPath: "PokemonAPI",
    baseQuery: fetchBaseQuery({baseUrl: "https://pokeapi.co/api/v2/"}),
    tagTypes: ["pokemon"],
    endpoints: (build) => ({

        fetchAllPokemon: build.query<IPokemon[], number>({
            query: (limit: number = 0, offset: number = 100000) => ({
                url: '/pokemon',
                params: {
                    _limit: limit,
                    _offset: offset,

                }
            })
        }),

        getPokemonByName: build.query<IPokemonItem, string>({
            query: (name: string) => ({
                url: `/pokemon/${name}`
            })
        })
    })
})