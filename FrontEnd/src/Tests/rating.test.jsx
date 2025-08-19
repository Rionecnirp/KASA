import { render, screen } from '@testing-library/react'
import Rating from '../Components/Rating/Rating'

describe('Rating Component', () => {

  test('affiche 5 étoiles pleines quand stars=5', () => {
    render(<Rating stars={5} />)
    expect(screen.getAllByTestId('full-star')).toHaveLength(5)
    expect(screen.queryAllByTestId('empty-star')).toHaveLength(0)
  })

  test('affiche 3 étoiles pleines et 2 vides quand stars=3', () => {
    render(<Rating stars={3} />)
    expect(screen.getAllByTestId('full-star')).toHaveLength(3)
    expect(screen.getAllByTestId('empty-star')).toHaveLength(2)
  })

  test('affiche 0 étoile pleine et 5 vides quand stars=0', () => {
    render(<Rating stars={0} />)
    expect(screen.queryAllByTestId('full-star')).toHaveLength(0)
    expect(screen.getAllByTestId('empty-star')).toHaveLength(5)
  })
})