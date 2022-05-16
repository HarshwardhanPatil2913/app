import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  test('renders HomePage', () => {
    render(<Home />);
    expect(screen.getByText('Homepage')).toBeTruthy();
  });
});
