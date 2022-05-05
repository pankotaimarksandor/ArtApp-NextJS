import { createAction } from '@reduxjs/toolkit'
import * as Types from './types'

export const addFavorite = createAction<Types.AddFavorite>('favorites/addFavorite')
export const removeFavorite = createAction<Types.RemoveFavorite>('favorites/removeFavorite')
