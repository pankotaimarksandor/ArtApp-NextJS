import { RootState } from '../store'
import { createSelector } from '@reduxjs/toolkit'

export const selectFavorites = (state: RootState) => state.favorites
export const favoriteSelector = createSelector(selectFavorites, state => state)
export const getIsFavorite = (artworkId: number) => createSelector(
    selectFavorites,
    state => state.favoriteIds.some(id => id === artworkId)
)
