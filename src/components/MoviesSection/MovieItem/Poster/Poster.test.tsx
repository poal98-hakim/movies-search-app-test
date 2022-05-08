import Poster from "./Poster";
import { render, screen } from '@testing-library/react';
import { API_MOVIES_RESULT } from "../../../../models/__mocks__/Movie"

const PROPS = {
  multimedia: API_MOVIES_RESULT.results[0].multimedia
}

describe('Poster', () => {
  let props = {...PROPS};

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<Poster {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<Poster {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads poster image', () => {
    expect(screen.getByAltText("poster")).toBeInTheDocument();
    expect(screen.getByAltText("poster")).toHaveAttribute("src", props.multimedia.src);
  })
  
})
