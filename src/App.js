import React from 'react';
import AddColorForm from './addColorForm/AddColorForm';
import './stylesheets/APP.scss'

class App extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        colors:[]
    }
  }

  render() {
    return (
      <div className="app">
        <AddColorForm />
     </div>
    )
  }
}

export default App;
