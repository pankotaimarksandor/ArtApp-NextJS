import { RootState } from '../store'
import { createSelector } from '@reduxjs/toolkit'

export const selectArtworkDetails = (state: RootState) => state.artworkDetails
export const artworksSelector = createSelector(selectArtworkDetails, state => state)