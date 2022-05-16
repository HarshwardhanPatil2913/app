import React from 'react';
import ReactDOM from 'react-dom';
import Reports from '../pages/reports';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reports />, div);
});
