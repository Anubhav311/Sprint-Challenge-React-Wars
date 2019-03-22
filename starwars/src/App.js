import React, { Component } from 'react';

import './App.css';
import CharacterList from './components/CharacterList';
import ColumnHeaders from './components/ColumnHeaders';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 1,
      charsPerPage: 3
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
    console.log(this.state.currentPage);
  }

  render() {
    const { starwarsChars, currentPage, charsPerPage } = this.state;

    //Logic for current charecters
    const indexOfLastChar = currentPage * charsPerPage;
    const indexOfFirstChar = indexOfLastChar - charsPerPage;
    const currentChars = starwarsChars.slice(indexOfFirstChar, indexOfLastChar)

    //Logic for page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(starwarsChars.length/charsPerPage); i++){
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <div 
          key={number}
          id={number}
          onClick={this.handleClick}
          className="number"
        >
          {number}
        </div>
      )
    });

    //Code for rending to the DOM
    return (
      <div className="App">
        <h1 className="Header">Star Wars</h1>
        <div className="page-numbers">Page no. {renderPageNumbers}</div>
        <ColumnHeaders/>
        <CharacterList currentChars = {currentChars}/>
      </div>
    );
  }
}

export default App;
