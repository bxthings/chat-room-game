import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// TODO add tests that are more meaningful on the functionality
test('renders join form', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/room name to join/i);
  expect(linkElement).toBeInTheDocument();
});
