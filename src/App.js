import React from 'react';
import './App.css';
import { ComponentWithPopup } from "./components/Component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <ComponentWithPopup/>
      </div>
    );
  }
}

export default App;
