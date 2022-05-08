import MovieDescription from "./MovieDescription";
import { render, screen } from '@testing-library/react';
import { API_MOVIES_RESULT } from "../../../../../../models/__mocks__/Movie";

const PROPS = {
  description: API_MOVIES_RESULT.results[0].summary_short
}

describe('MovieDescription', () => {
  let props = {...PROPS};//using a shallow copy because I'm only reading the data. Otherwise due to the nested array I would do a deep copy

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<MovieDescription {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<MovieDescription {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads movie description', () => {
    expect(screen.getByText(props.description)).toBeInTheDocument();
  })
  
})
