import React from 'react'
import Result from './Result'
import AppContext from '../AppContext'

class ResultsList extends React.Component { 
  static contextType = AppContext; 
  
  render() { 
    return(
      <ul>
        {this.context.result.length > 0 ? <Result /> : <h3>Nothing Found!</h3>}
      </ul>
    )
  }
  
}

export default ResultsList 