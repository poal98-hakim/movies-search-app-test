import SearchSection from "./SearchSection";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

const PROPS = {
  onSearch: jest.fn(),
  totalResults: 5,
  error: "Invalid key"
}

describe('SearchSection', () => {
  let props = {...PROPS};

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<SearchSection {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<SearchSection {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads search bars', () => {
    expect(screen.getAllByTestId("search-bar")).toHaveLength(2);
  })

  it('shows correctly keyword search bar', () => {
    expect(screen.getByAltText("icon-search")).toBeInTheDocument();
    expect(screen.getAllByRole("img")[0]).toHaveAttribute("src", expect.stringContaining("search-icon-yellow.png"));
  })

  it('shows correctly api key search bar', () => {
    expect(screen.getByAltText("icon-key")).toBeInTheDocument();
    expect(screen.getAllByRole("img")[1]).toHaveAttribute("src", expect.stringContaining("key-icon.png"));
  })

  it('loads correct inputs', () => {
    const searchBarsInput = screen.getAllByRole("textbox");
    expect(searchBarsInput).toHaveLength(2);
    expect(searchBarsInput[0]).toHaveAttribute("placeholder", "Search*");
    expect(searchBarsInput[0]).toHaveAttribute("type", "text");
    expect(searchBarsInput[1]).toHaveAttribute("placeholder", "Api Key*");
    expect(searchBarsInput[1]).toHaveAttribute("type", "text");
  })

  it('correctly fires handler on typing inputs', async () => {
    const searchBarsInput = screen.getAllByRole("textbox");

    userEvent.type(searchBarsInput[0], "{enter}");
    expect(props.onSearch).not.toHaveBeenCalled(); //does not fire the call if you don't fill both the inputs
  })


})
