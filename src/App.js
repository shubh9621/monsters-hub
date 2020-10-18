import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBar } from './components/search-bar/search-bar.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFieldValue: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchFieldValue } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFieldValue.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Hub</h1>
        <SearchBar
          placeholder="Search Monsters...."
          handleChange={e => this.setState({ searchFieldValue: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;
