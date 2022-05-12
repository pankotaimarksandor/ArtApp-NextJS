import { render, screen, waitFor } from '../test-utils'
import userEvent from '@testing-library/user-event'
import ArtworkList from './artworkList'

test('render artwork list', async() => {
    render(<ArtworkList/>)

    const cards = await screen.findAllByRole('artworkCard')
    expect(cards).toHaveLength(25)

}, 10000)