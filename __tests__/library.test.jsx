import React from 'react';
import ReactDOM from 'react-dom';
import Library from '../pages/library';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Library />, div);
});
