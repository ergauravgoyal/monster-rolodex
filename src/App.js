import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchedString: "",
      updatedResult: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ monsters: users });
      });
  }
  /**
   * 
   *  handleSearch = (e) => {
    debugger;
    const { monsters } = this.state;
    let filteredResults = [];

    filteredResults = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({
      updatedResult: filteredResults,
    });
    debugger;
  };
   */

  handleSearchChange = (e) => {
    this.setState({ searchedString: e.target.value });
  };
  render() {
    const { searchedString, monsters } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchedString.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
