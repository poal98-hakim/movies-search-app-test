import SearchBar from "./SearchBar";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

const PROPS = {
  icon: {alt: "search icon", src: "http://localhost/search-icon-yellow.png"},
  type: "text",
  placeholder: "Search",
  value: "test",
  onChange: jest.fn()
}

describe('SearchBar', () => {
  let props = {...PROPS};

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<SearchBar {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<SearchBar {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads search bar', () => {
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
  })

  it('shows image', () => {
    expect(screen.getByAltText(props.icon.alt)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", props.icon.src);
  })

  it('loads correct input', () => {
    const searchBar = screen.getByRole("textbox");
    expect(searchBar).toBeInTheDocument();
    expect(searchBar).toHaveAttribute("type", props.type);
    expect(searchBar).toHaveAttribute("placeholder", props.placeholder);
    expect(searchBar).toHaveValue(props.value);
  })

  it('fires handler on changing input', () => {
    userEvent.type(screen.getByRole("textbox"), "10");
    expect(props.onChange).toHaveBeenCalled();
  })


})
