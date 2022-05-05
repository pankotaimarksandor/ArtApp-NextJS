import { RootState } from '../store'
import {createSelector} from '@reduxjs/toolkit'

export const selectArtworks = (state: RootState) => state.artworks
export const artworksSelector = createSelector(selectArtworks, state => state)