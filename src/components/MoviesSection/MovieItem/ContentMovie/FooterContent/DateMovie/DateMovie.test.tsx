import DateMovie from "./DateMovie";
import { render, screen } from '@testing-library/react';
import { API_MOVIES_RESULT } from "../../../../../../models/__mocks__/Movie";
import moment from 'moment';

const PROPS = {
    date: API_MOVIES_RESULT.results[0].publication_date
}

describe('DateMovie', () => {
  let props = {...PROPS};//using a shallow copy because I'm only reading the data. Otherwise due to the nested array I would do a deep copy

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<DateMovie {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<DateMovie {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads date movie', () => {
    const dateFormatted = moment(props.date).format('LL');
    expect(screen.getByText(dateFormatted)).toBeInTheDocument();
  })
  
})
