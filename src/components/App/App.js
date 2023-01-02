import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: ''
    }
  }

  componentDidMount() {
    
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