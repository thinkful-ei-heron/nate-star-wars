import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ResultList from './Components/Result-List'
import SearchBar from './Components/SearchBar'
import {MemoryRouter} from 'react-router-dom'



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders SearchBar without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><SearchBar /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders ResultList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ResultList results={[{}]}/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})
