import { ArtworkDetailsResponse } from '../pages/arts/[id]'
import noImage from '../public/images/noImage.jpeg'

export const mockedArtworkDetails: ArtworkDetailsResponse = {
    artworkDetails: {
        image: noImage.src,
        title: 'RespTitle',
        artist: 'RespArtist',
        department: 'RespDepartment'
    },
    error: null
}

export const mockedArtworkError: ArtworkDetailsResponse = {
    artworkDetails: {
        image: '',
        title: '',
        artist: '',
        department: ''
    },
    error: 'Something went wrong'
}