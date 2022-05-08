import HeaderSection from "./HeaderSection";
import { render, screen } from '@testing-library/react';

const PROPS = {
    hasMore: true
}

describe('HeaderSection', () => {
  let props = {...PROPS};

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<HeaderSection {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<HeaderSection {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads buttons', () => {
    expect(screen.getAllByRole("button")).toHaveLength(2);
  })

  it('shows correctly icons', () => {
    expect(screen.getByAltText("left-arrow")).toBeInTheDocument();
    expect(screen.getByAltText("right-arrow")).toBeInTheDocument();
    expect(screen.getAllByRole("img")[0]).toHaveAttribute("src", expect.stringContaining("left-arrow.png"));
    expect(screen.getAllByRole("img")[1]).toHaveAttribute("src", expect.stringContaining("right-arrow.png"));
  })

})
