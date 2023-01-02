import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: 'hi'
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/tricks`)
        .then(response => response.json())
        .then(data => console.log(data))
        .then ((data) => {this.setState({tricks: data })})
    console.log(this.state.tricks)
  }
  
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <div className="tricks">
          <p>{this.state.tricks}</p>
        </div>
      </div>
    );
  }
}

export default App;