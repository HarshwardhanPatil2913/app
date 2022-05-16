import React from 'react';
import ReactDOM from 'react-dom';
import Logbook from '../pages/logbook';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Logbook />, div);
});
