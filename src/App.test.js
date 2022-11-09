import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

test('full app rendering/navigating', async () => {
  render(<App />);
  // verify page content for default route
  expect(screen.getByText(/dispatchers page/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  await userEvent.click(screen.getByText(/service staff/i));
  expect(
    screen.getByText(/compare product using qr code scanner/i),
  ).toBeInTheDocument();
});
