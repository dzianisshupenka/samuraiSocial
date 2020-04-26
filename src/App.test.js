import React from 'react';
import ReactDOM from 'react-dom';
import SamuraiJSApp from './App';

test('render without crushing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
  // const { getByText } = render(<SamuraiJSApp />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
