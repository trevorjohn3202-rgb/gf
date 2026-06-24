import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Miraj page', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Miraj/i)[0];
  expect(linkElement).toBeInTheDocument();

});

