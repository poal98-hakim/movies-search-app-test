import Search from "./Search";
import { render, screen } from '@testing-library/react';

const PROPS = {
  totalResults: 5
}

describe('Search', () => {
  let props = {...PROPS};

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<Search {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<Search {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads total results', () => {
    expect(screen.getByText(`${props.totalResults} results`)).toBeInTheDocument();
  })

  it('loads button', () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  })

})
