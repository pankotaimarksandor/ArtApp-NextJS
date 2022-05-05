import { createReducer } from '@reduxjs/toolkit'
import { searchArtworksByQuery, clearSearchCards } from './actions'
import * as Types from './types'

const initialState: Types.SearchState = {
    searchLoading: false,
    searchError: null,
    searchCards: []
}

export const searchReducer = createReducer(initialState, builder => {
    builder
        .addCase(searchArtworksByQuery.pending, state => {
            state.searchLoading = true
            state.searchError = null
        })
        .addCase(searchArtworksByQuery.fulfilled, (state, { payload }) => {
            state.searchLoading = false
            state.searchCards = payload.searchCards
        })
        .addCase(searchArtworksByQuery.rejected, (state, { payload } ) => {
            state.searchLoading = false
            state.searchError = String(payload)
        })
        .addCase(clearSearchCards, state => {
            return initialState
        })
})