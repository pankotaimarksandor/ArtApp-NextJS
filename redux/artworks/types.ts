export type ArtworkCard = {
    id: number,
    title: string,
    thumb: string
}

export type ArtworkState = {
    loading: boolean,
    error: null | string,
    artworkCards: ArtworkCard[],
    totalItems: number
}

export type ArtworkResponse = {
    artworkCards: ArtworkCard[],
    totalItems: number
}

export type PageData = {
    page: number,
    limit: number
}