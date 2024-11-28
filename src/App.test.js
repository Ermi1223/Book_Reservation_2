import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Admin Dashboard link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /Admin Dashboard/i });
  expect(linkElement).toBeInTheDocument();
});
