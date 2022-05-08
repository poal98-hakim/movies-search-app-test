import FooterContent from "./FooterContent";
import { render, screen } from '@testing-library/react';
import { API_MOVIES_RESULT } from "../../../../../models/__mocks__/Movie";
import moment from 'moment';

const PROPS = {
  date: API_MOVIES_RESULT.results[0].publication_date
}

describe('FooterContent', () => {
  let props = {...PROPS};

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<FooterContent {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<FooterContent {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads date', () => {
    const dateFormatted = moment(props.date).format('LL');
    expect(screen.getByText(dateFormatted)).toBeInTheDocument();
  })
  
})
