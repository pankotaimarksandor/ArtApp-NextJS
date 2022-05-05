import { RootState } from '../store'
import { createSelector } from '@reduxjs/toolkit'

export const selectSearch = (state: RootState) => state.searchResult
export const searchSelector = createSelector(selectSearch, state => state)