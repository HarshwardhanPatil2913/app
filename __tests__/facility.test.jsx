import { render, screen } from '@testing-library/react';

import Facility from '../pages/facility';

describe('Facility', () => {
  test('renders MainPage', () => {
    render(<Facility />);
  });
});
