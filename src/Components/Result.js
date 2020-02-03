import React, { Component } from 'react';
import './Result.css';
import AppContext from '../AppContext'

export class Results extends Component { 
  static contextType = AppContext;
  render(){ 
    return(
      this.context.result.map((item, index) => {
        return(
          <li key={index}>
            <h3>{item.name ? item.name : item.title} </h3>
            {/* <ul>
              <li>Height: {item.height}</li>
              <li>Hair color: {item.hair_color}</li>
              <li>Skin color: {item.skin_color}</li>
              <li>Birth Year: {item.birth_year}</li>
              <li>Gender: {item.gender}</li>
            </ul> */}
          </li>
        )
      })
    )
  }
}


export default Results