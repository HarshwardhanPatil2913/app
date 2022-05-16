import { render, screen } from '@testing-library/react';
import People from '../pages/people';

describe('People', () => {
  test('renders PeoplePage', () => {
    render(<People />);
    expect(screen.getByText('Peoplepage')).toBeTruthy();
  });
});
