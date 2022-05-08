import Spinner from "./Spinner";
import { render } from '@testing-library/react';


describe('Spinner', () => {

  beforeEach(() => { //before each test render the component and reset the value of props
    render(<Spinner />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<Spinner />);
    expect(baseElement).toMatchSnapshot()
  })
  
})
