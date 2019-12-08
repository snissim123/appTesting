import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, fireEvent} from '@testing-library/react';
import {Pageone, pageOneStyles} from './App.js';
import { getByTestId } from '@testing-library/dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('Submit button should take you to second page', () => {

  let page = 1;
  let setpage = jest.fn();
  let json = "";
  let setjson = jest.fn();
  let address = "";
  let setaddress = jest.fn;
  // const [page, setpage] = React.useState(1);
  // const [json, setjson] = React.useState([]);
  // const [address, setaddress] = useState('');
  // const classes = pageOneStyles();
  // const pageNum = getByTestId(container, "nextButton");
  const {getByTestId} = render(<Pageone pagestate ={page, setpage} jsonstate={json,setjson} addressprop={address, setaddress} />)

  fireEvent.click(getByTestId('locationSubmit'));
  expect(page).toBe("2");
})