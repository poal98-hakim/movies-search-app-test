import MovieList from "./MovieList";
import { render, screen } from '@testing-library/react';
import { API_MOVIES_RESULT } from "../../../models/__mocks__/Movie"

const PROPS = { //mock of Props
  movies: API_MOVIES_RESULT.results
}

describe('MovieList', () => {
  let props = {...PROPS};//using a shallow copy because I'm only reading the data. Otherwise due to the nested array I would do a deep copy

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<MovieList {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<MovieList {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads list movies', () => {
    expect(screen.getByRole("list")).toBeInTheDocument();
  })

  it('loads 2 movies', () => {
    expect(screen.getByRole("list").children).toHaveLength(2);
  })
  
})
