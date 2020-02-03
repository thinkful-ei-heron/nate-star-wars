import React from 'react';
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import search from './api';
import AppContext from './AppContext'
import ResultList from './Components/Result-List'
import { BrowserRouter } from 'react-router-dom';


function Spinner() {
const spin = document.getElementById("spinner");
    spin.className="show";
}

function HideSpinner() {
  const spin = document.getElementById("spinner");
  spin.className = spin.className.replace("show",'');
}


class App extends React.Component{

  state = { 
    result: [],
    loading: false, 
    error: null,
    boolean: false
  }

  handleSearchChange = (searchWord, category) => { 
    this.setState({loading: true})
    Spinner();
    search(category,searchWord)

      .then(setTimeout(() => { 
        HideSpinner()
      },1000))
      .then(data => 
        this.setState({
        result: data.results,
        boolean: true
      }))
      .catch(ERROR => console.log(ERROR))
    }

  render() { 
    const value = {
      result: this.state.result, 
      handleSearchChange: this.handleSearchChange
    }
    return(
      <BrowserRouter>
        <AppContext.Provider value={value}>
        <div> 
          <Header />
          <main>
            <SearchBar /> 
            <div id="spinner" className=""></div>
          {this.state.boolean ?<ResultList />:"" } 
          </main>
        </div>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }

}

export default App; 