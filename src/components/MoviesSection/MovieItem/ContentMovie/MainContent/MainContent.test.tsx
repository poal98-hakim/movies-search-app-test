import MainContent from "./MainContent";
import { render } from '@testing-library/react';
import { API_MOVIES_RESULT } from "../../../../../models/__mocks__/Movie";

const PROPS = {
  movie: API_MOVIES_RESULT.results[0]
}

describe('MainContent', () => {
  let props = {...PROPS};

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<MainContent {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<MainContent {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  
})
