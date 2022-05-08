import ContentMovie from "./ContentMovie";
import { render, screen } from '@testing-library/react';
import { API_MOVIES_RESULT } from "../../../../models/__mocks__/Movie"

const PROPS = {
  movie: API_MOVIES_RESULT.results[0]
}

describe('ContentMovie', () => {
  let props = {...PROPS};

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<ContentMovie {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<ContentMovie {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads date', () => {
    expect(screen.getByTestId("date-movie")).toBeInTheDocument();
  })
  
})
