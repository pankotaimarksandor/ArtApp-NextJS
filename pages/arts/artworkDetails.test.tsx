import {findAllByRole, getAllByRole, render, screen} from '@testing-library/react'
import ArtworkDetailsPage from './[id]'
import {mockedArtworkDetails, mockedArtworkError} from '../../mocks/mocks'

describe('<ArtworkDetailsPage />', () => {
    it('render detail texts', () => {
        render(<ArtworkDetailsPage {...mockedArtworkDetails}/>)

        const artistName = screen.getByText('RespArtist')
        expect(artistName).toBeInTheDocument()

        const titleName = screen.getByText('RespTitle')
        expect(titleName).toBeInTheDocument()
    })
    it('render image', () => {
        render(<ArtworkDetailsPage {...mockedArtworkDetails}/>)

        //check if the image is in the document or not
        const image = screen.getByRole('img', { name: 'RespArtist' })
        expect(image).toBeInTheDocument()

        //check image alt text
        const imageAltText = (image as HTMLImageElement).alt
        expect(imageAltText).toEqual('RespArtist')

        //check for multiple images
        const images = screen.getAllByRole('img')
        expect(images).toHaveLength(1)
    })
    it('should display error message', () => {
        render(<ArtworkDetailsPage {...mockedArtworkError}/>)

        //check the error message
        const errorMessage = screen.getByText(/something went wrong/i)
        expect(errorMessage).toBeInTheDocument()
    })
})