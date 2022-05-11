import { render, screen } from '@testing-library/react'
import ArtworkCard from './artworkCard'
import noImage from '../public/images/noImage.jpeg'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import user from '@testing-library/user-event'

describe('<ArtworkCard/>', () => {
    it('should render image, text and favorite button', () => {
        render(
            <Provider store={store}>
                <ArtworkCard id={0} title={'TestCard'} thumb={(noImage as HTMLImageElement).src}/>
            </Provider>
        )

        //check the image render
        const image = screen.getByRole('artImage')
        expect(image).toBeInTheDocument()

        //check the text
        const titleText = screen.getByText('TestCard')
        expect(titleText).toBeInTheDocument()

        const favButton = screen.getByRole('favButton')
        expect(favButton).toHaveTextContent('Add favorite')
    })
    it('changes text when user clicks on it', async () => {
        render(
            <Provider store={store}>
                <ArtworkCard id={0} title={'TestCard'} thumb={(noImage as HTMLImageElement).src}/>
            </Provider>
        )

        //initial text is Add
        const favButton = screen.getByRole('favButton')
        expect(favButton).toHaveTextContent('Add favorite')

        //when user clicks on it, it must change the text to Remove
        await user.click(favButton)
        await expect(favButton).toHaveTextContent('Remove favorite')
    })
})