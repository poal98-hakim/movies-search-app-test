import NumResults from "./NumResults";
import { render, screen } from '@testing-library/react';

const PROPS = {
  totalResults: 5
}

describe('NumResults', () => {
  let props = {...PROPS};

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<NumResults {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<NumResults {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads total results', () => {
    expect(screen.getByText(`${props.totalResults} results`)).toBeInTheDocument();
  })

})
