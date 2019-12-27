import React from 'react';
import AddColorForm from './addColorForm/AddColorForm';
import ColorList from './colorList/ColorList';
import './stylesheets/APP.scss'

class App extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        colors:[]
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
