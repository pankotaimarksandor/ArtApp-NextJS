import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import user from '@testing-library/user-event'
import SearchBar from './searchBar'

describe('<SearchBar />', () => {
    it('should display an empty input field and a button', () => {
        render(<SearchBar onSearchHandler={jest.fn()}/>)

        const inputField = screen.getByRole('textbox')
        expect(inputField).toBeInTheDocument()

        const button = screen.getByText('Search')
        expect(button).toBeInTheDocument()
    })
    it('should update text when user types', async () => {
        render(<SearchBar onSearchHandler={jest.fn()}/>)

        const inputField = screen.getByRole('textbox')

        await user.clear(inputField)
        await user.type(inputField, 'asdasd')

        await expect(inputField).toHaveDisplayValue('asdasd')
    })
})