import { render, screen } from '@testing-library/react';
import Metrics from './Metrics';

test('renders learn react link', () => {
  render(<Metrics />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
