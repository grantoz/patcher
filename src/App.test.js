import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  /*{ const linkElement = screen.getByText(/Recordset name/i); }*/
  const headingElement = screen.getByTestId('recordset-heading');
  const headingText = screen.getByTestId('recordset-heading-text');
  expect(headingElement).toBeInTheDocument();
  expect(headingText).toBeInTheDocument();
});
