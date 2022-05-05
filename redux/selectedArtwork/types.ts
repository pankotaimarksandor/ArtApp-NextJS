export type ArtworkDetails = {
    artist: string,
    title: string,
    image: string,
    department: string
}

export type SelectedArtworkResponse = {
    artworkDetails: ArtworkDetails
}

export type SelectedArtworkState = {
    loading: boolean,
    error: null | string,
    artworkDetails: ArtworkDetails
}