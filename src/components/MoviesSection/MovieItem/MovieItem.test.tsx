import MovieItem from "./MovieItem";
import { render, screen } from '@testing-library/react';
import { API_MOVIES_RESULT } from "../../../models/__mocks__/Movie"
import moment from 'moment';

const PROPS = {
  movie: API_MOVIES_RESULT.results[0]
}

describe('MovieItem', () => {
  let props = {...PROPS};//using a shallow copy because I'm only reading the data. Otherwise due to the nested array I would do a deep copy

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<MovieItem {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<MovieItem {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads poster image', () => {
    expect(screen.getByAltText("poster")).toBeInTheDocument();
    expect(screen.getByAltText("poster")).toHaveAttribute("src", props.movie.multimedia.src);
  })

  it('loads title movie', () => {
    expect(screen.getByText(props.movie.display_title)).toBeInTheDocument();
  })

  it('loads movie description', () => {
    expect(screen.getByText(props.movie.summary_short)).toBeInTheDocument();
  })

  it('loads publication date', () => {
    const dateFormatted = moment(props.movie.publication_date).format('LL');
    expect(screen.getByText(dateFormatted)).toBeInTheDocument();
  })
  
})
