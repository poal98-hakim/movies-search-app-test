import ImageButton from "./ImageButton";
import { render, screen } from '@testing-library/react';

const PROPS = {
    icon: {src: "../../images/right-arrow.png", alt: "left-arrow"},
    onClick: jest.fn(), 
    disabled: true
}

describe('ImageButton', () => {
  let props = {...PROPS};//using a shallow copy because I'm only reading the data. Otherwise due to the nested array I would do a deep copy

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<ImageButton {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<ImageButton {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads button', () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  })

  it('shows correctly icon', () => {
    expect(screen.getByAltText(props.icon.alt)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", props.icon.src);
  })

})
