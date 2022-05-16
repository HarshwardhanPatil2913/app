import React from 'react';
import ReactDOM from 'react-dom';
import Business from '../pages/business';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Business />, div);
});
