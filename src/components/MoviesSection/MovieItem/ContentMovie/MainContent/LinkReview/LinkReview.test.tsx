import LinkReview from "./LinkReview";
import { render, screen } from '@testing-library/react';
import { API_MOVIES_RESULT } from "../../../../../../models/__mocks__/Movie";

const PROPS = {
    link: API_MOVIES_RESULT.results[0].link
}

describe('LinkReview', () => {
  let props = {...PROPS};//using a shallow copy because I'm only reading the data. Otherwise due to the nested array I would do a deep copy

  beforeEach(() => { //before each test render the component and reset the value of props
    props = {...PROPS};
    render(<LinkReview {...props} />);
  });
  
  it('renders correctly', () => {
    const { baseElement } = render(<LinkReview {...props} />);
    expect(baseElement).toMatchSnapshot()
  })

  it('loads link review', () => {
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", props.link.url);
    expect(link).toHaveTextContent(props.link.suggested_link_text);
  })
  
})
