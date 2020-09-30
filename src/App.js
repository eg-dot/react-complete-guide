import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import './Person/Person.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

switchNameHandler = (newName) => {
  //console.log('was clicked');
  //this.state.persons[0].name = ["max"]; NOT
  this.setState({
    persons: [
      { name: newName, age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26},
  ]
} )
}

nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 28} ,
      ]
    } )
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
            name={person.name} 
            age={person.age}/>
          })}
        </div>       
      );
    }

    return (
      <div className="App">
        <h1>Hi React app</h1>
        <button 
        style={style} 
        onClick={this.togglePersonsHandler}>Switch name</button>
        {persons}
      </div>
    );
  }
}

export default App;
