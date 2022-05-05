import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { artworksReducer } from './artworks'
import { selectedArtworkReducer } from './selectedArtwork'
import { favoriteReducer } from './favorites'
import { searchReducer } from './search'

export const store = configureStore({
    reducer: {
        artworks: artworksReducer,
        artworkDetails: selectedArtworkReducer,
        favorites: favoriteReducer,
        searchResult: searchReducer
    },
    devTools: true
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>