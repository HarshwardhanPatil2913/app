import React from 'react';
import ReactDOM from 'react-dom';
import DrawerComponent from '../components/Navbar/DrawerComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DrawerComponent />, div);
});
