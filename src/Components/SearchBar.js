import React from 'react'
import AppContext from '../AppContext'
import {withRouter} from 'react-router-dom'

class SearchBar extends React.Component { 
  static contextType = AppContext; 

  state = { 
    SearchWord: '',
    category: null, 
  }

  submitSearch = (e) => {
    e.preventDefault()
    this.context.handleSearchChange(this.state.SearchWord, this.state.category)
    this.setState({ 
      SearchWord: '', 
      category: ''
    })
    this.props.history.push('/result')
  }

  category = (str) => {
    this.setState({
      category: str
    })
  }

  SearchWord = (str) => {
    this.setState({ 
      SearchWord: str
    })
  }

  render(){
    return ( 
      <div className="searchComponent"> 
        <form className="searchform" onSubmit={this.submitSearch}>
          <label htmlFor="searchWord">Search: </label>
          <input type="text" value={this.state.SearchWord} name="Search" onChange={e => this.SearchWord(e.target.value)} required></input>
          <select name="Category" value={this.state.category ? this.state.category : ''} onChange={ e => this.category(e.target.value)} required>
            <option value="" select disabled>Select an option!</option>
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="species">Species</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </div>

    );
  }

}

export default withRouter(SearchBar)