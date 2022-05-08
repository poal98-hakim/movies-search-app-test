import Button from "./Button";
import { render, screen } from '@testing-library/react';

const PROPS = { //mock of Props
  type: "submit",
  value: "Search"
}

describe('Button', () => {
  let props = {...PROPS};

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<Button {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<Button {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads button', () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  })
  
})
