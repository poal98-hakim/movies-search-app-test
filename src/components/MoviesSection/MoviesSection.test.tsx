import MoviesSection from "./MoviesSection";
import { cleanup, render, screen } from '@testing-library/react';
import { API_MOVIES_RESULT } from '../../models/__mocks__/Movie';

const PROPS = {
    movies: API_MOVIES_RESULT.results,
    isLoading: false, 
    hasMore: true
}

describe('MoviesSection', () => {
  let props = {...PROPS};//using a shallow copy because I'm only reading the data. Otherwise due to the nested array I would do a deep copy

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<MoviesSection {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<MoviesSection {...props} />);
    expect(baseElement).toMatchSnapshot();
  })

  it('loads loader', () => {
    cleanup();
    props.isLoading = true;
    render(<MoviesSection {...props} />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  })

  it('loads movies', () => {
    expect(screen.getByRole("list").children).toHaveLength(2);
  })

  it('loads arrow buttons', () => {
    expect(screen.getAllByRole("button")).toHaveLength(2);
  })

})
