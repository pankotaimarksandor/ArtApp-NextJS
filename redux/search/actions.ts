import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { artworkApi } from '../../apis/artworkApi'
import * as Types from './types'

export const searchArtworksByQuery = createAsyncThunk<Types.SearchResponse, string, { rejectValue: string }>(
    'search/searchArtworksByQuery',
    async (query, thunkAPI) => {
        const response = await artworkApi.get(`/search?q=${query}&fields=id,title,image_id`)

        if(response.data !== null || response.data.data === null) {
            thunkAPI.rejectWithValue('Failed to fetch')
        }

        const searchCards: Array<Types.SearchCard> = []

        response.data.data.forEach((artwork: any )=> {
            return searchCards.push({
                id: artwork.id,
                title: artwork.title,
                thumb: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg`
            })
        })

        return { searchCards: searchCards }
    }
)

export const clearSearchCards = createAction('search/clearSearchCards')