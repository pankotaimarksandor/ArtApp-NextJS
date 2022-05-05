import { createReducer } from '@reduxjs/toolkit'
import { addFavorite, removeFavorite } from './actions'
import * as Types from './types'

const initialState: Types.FavoriteState = {
    favoriteCards: [],
    favoriteIds: []
}

export const favoriteReducer = createReducer(initialState, builder => {
    builder
        .addCase(addFavorite, (state, {payload}) => {
            state.favoriteIds.push(payload.id)
            state.favoriteCards.push(payload.details)
        })
        .addCase(removeFavorite, (state, { payload }) => {
            state.favoriteIds = state.favoriteIds.filter(fav => fav !== payload.id)
            state.favoriteCards = state.favoriteCards.filter(fav => fav.id !== payload.id)
        })
})