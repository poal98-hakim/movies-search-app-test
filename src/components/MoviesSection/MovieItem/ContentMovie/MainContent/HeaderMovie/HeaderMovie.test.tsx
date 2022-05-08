import HeaderMovie from "./HeaderMovie";
import { render, screen } from '@testing-library/react';
import { API_MOVIES_RESULT } from "../../../../../../models/__mocks__/Movie";

const PROPS = {
    title: API_MOVIES_RESULT.results[0].display_title,
    rating: API_MOVIES_RESULT.results[0].mpaa_rating,
}

describe('HeaderMovie', () => {
  let props = {...PROPS};//using a shallow copy because I'm only reading the data. Otherwise due to the nested array I would do a deep copy

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<HeaderMovie {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<HeaderMovie {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads title movie', () => {
    expect(screen.getByText(props.title)).toBeInTheDocument();
  })
  
})
