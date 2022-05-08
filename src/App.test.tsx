import App from "./App";
import { render, screen } from '@testing-library/react';


describe('App', () => {

  beforeEach(() => { // before each test render the component
    render(<App />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads main content', () => {
    expect(screen.getByRole("main")).toBeInTheDocument();
  })


})
