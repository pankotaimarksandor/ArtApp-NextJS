import { createReducer } from '@reduxjs/toolkit'
import { fetchArtworksByPage } from './actions'
import * as Types from './types'

const initialState: Types.ArtworkState = {
    loading: false,
    error: null,
    artworkCards: [],
    totalItems: 0
}

export const artworksReducer = createReducer(initialState, builder => {
    builder
        .addCase(fetchArtworksByPage.pending, state => {
            state.loading = true
         })
        .addCase(fetchArtworksByPage.fulfilled, (state, { payload }) => {
            state.loading = false
            state.artworkCards = payload.artworkCards
            state.totalItems = payload.totalItems
        })
        .addCase(fetchArtworksByPage.rejected, (state, { payload } ) => {
            state.loading = false
            state.error = String(payload)
        })
})