import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ServiceStaff from './index';

describe('<ServiceStaff />', () => {
  it('renders correnctly', () => {
    const { getByTestId } = render(<ServiceStaff />);
    const input = screen.getByRole('textbox');
    const submit = screen.getByTestId('submit-form');
    
    expect(input.value).toBe('');
  });

  it('happy show serial data', async () => {
    render(<ServiceStaff />);
    const input = screen.getByRole('textbox');
    const submit = screen.getByTestId('submit-form');
    //filling the search serial input
    userEvent.type(input, '1919-0038-4721-0Xpr');
    userEvent.click(submit);
    // verifying the found result data
    expect(screen.getByText(/kassulke & sohn/i)).toBeInTheDocument();
  });
});
