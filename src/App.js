import React from 'react';
import AddColorForm from './addColorForm/AddColorForm';
import ColorList from './colorList/ColorList';
import './stylesheets/APP.scss'

class App extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        colors: [{
          "id": "test-001",
          "title": "bright red",
          "color": "#ff0000",
          "rating":4
        }]
    }
  }
  
  render() {
    const { colors } = this.state;
    return (
      <div className="app">
        <AddColorForm />
        <ColorList colors={colors}/>
     </div>
    )
  }
}

export default App;
