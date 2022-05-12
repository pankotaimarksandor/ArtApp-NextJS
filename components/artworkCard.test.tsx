import { render, screen } from '../test-utils'
import ArtworkCard from './artworkCard'
import noImage from '../public/images/noImage.jpeg'
import userEvent from '@testing-library/user-event'

describe('Artwork card tests', () => {
    test('should render image, text and favorite button', () => {
        render(<ArtworkCard id={0} title={'TestCard'} thumb={(noImage as HTMLImageElement).src}/>)

        //check the image render
        const image = screen.getByRole('artImage', { name: 'TestCard' })
        expect(image).toBeInTheDocument()

        //check the text
        const titleText = screen.getByText('TestCard')
        expect(titleText).toBeInTheDocument()

        const favButton = screen.getByRole('button', { name: /add favorite/i })
        expect(favButton).toBeInTheDocument()
    })
    test('button must change text when user clicks on it',  async () => {
        render(<ArtworkCard id={0} title={'TestCard'} thumb={(noImage as HTMLImageElement).src}/>)

        //check the button in DOM
        const favButton = screen.getByRole('button', { name: /add favorite/i })
        expect(favButton).toBeInTheDocument()

        //changes the text when user clicks on it
        await userEvent.click(favButton)
        expect(favButton).toHaveTextContent(/remove favorite/i)
    })
})