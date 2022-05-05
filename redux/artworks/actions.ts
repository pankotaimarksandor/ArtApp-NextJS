import { createAsyncThunk } from '@reduxjs/toolkit'
import { artworkApi } from '../../apis/artworkApi'
import * as Types from './types'

export const fetchArtworksByPage = createAsyncThunk<Types.ArtworkResponse, Types.PageData, { rejectValue: string }>(
    'artworks/fetchArtworksByPage',
    async (data, thunkAPI) => {
        const response = await artworkApi.get(`?page=${data.page}&limit=${data.limit}`)

        if(response.data !== null || response.data.data === null) {
            thunkAPI.rejectWithValue('Failed to fetch')
        }

        const artworkCards: Types.ArtworkCard[] = []

        response.data.data.forEach((artwork: any) => {
            return artworkCards.push({
                id: artwork.id,
                title: artwork.title,
                thumb: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg`
            })
        })

        return { artworkCards: artworkCards, totalItems: response.data.pagination.total}
    }
)