import { render, screen } from '@testing-library/react';

import Services from '../pages/services';

describe('Facility', () => {
  test('renders MainPage', () => {
    render(<Services/>);
  });
});