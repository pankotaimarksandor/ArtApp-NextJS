import { ArtworkDetailsResponse } from '../pages/arts/[id]'
import noImage from '../public/images/noImage.jpeg'
import ArtworkCard, {ArtworkCardProps} from "../components/artworkCard";
import artworkCard from "../components/artworkCard";

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

export function generateMockedArtworkCards(limit: number) {
    const artworkCards: ArtworkCardProps[] = []

    for(let i = 0; i < limit; i++){
        artworkCards.push({ id: i, title: `Title + ${i}`, thumb: noImage.src })
    }

    return artworkCards
}