import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { artworkApi } from '../../apis/artworkApi'
import * as Types from './types'

export const fetchSelectedArtwork = createAsyncThunk<Types.SelectedArtworkResponse, number, { rejectValue: string }>(
    'artworks/fetchSelectedArtwork',
    async (id, thunkAPI) => {
        const response = await artworkApi.get(`/${id}`)

        if(response.data !== null || response.data.data === null) {
            thunkAPI.rejectWithValue('Failed to fetch')
        }

        const artwork = response.data.data

        const artworkDetails: Types.ArtworkDetails = {
            image: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
            title: artwork.title,
            artist: artwork.artist_title,
            department: artwork.department_title
        }

        return { artworkDetails: artworkDetails }
    }
)

export const clearSelectedArtwork = createAction('artworks/clearSelectedArtwork')