import { createReducer } from '@reduxjs/toolkit'
import { fetchSelectedArtwork, clearSelectedArtwork } from './actions'
import * as Types from './types'

const initialState: Types.SelectedArtworkState = {
    loading: false,
    error: null,
    artworkDetails: {
        artist: '',
        title: '',
        image: '',
        department: ''
    }
}

export const selectedArtworkReducer = createReducer(initialState, builder => {
    builder
        .addCase(fetchSelectedArtwork.pending, state => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchSelectedArtwork.fulfilled, (state, { payload }) => {
            state.loading = false
            state.artworkDetails = payload.artworkDetails
        })
        .addCase(fetchSelectedArtwork.rejected, (state, { payload } ) => {
            state.loading = false
            state.error = String(payload)
        })
        .addCase(clearSelectedArtwork, (state) => {
            return initialState
        })
})