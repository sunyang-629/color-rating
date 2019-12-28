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
  
  rateColor = (id, rating) => {
    this.setState(prevState => ({
      colors: prevState.colors.map(color => 
        (color.id !== id) ?
          color :
          {
            ...color,
            rating
          }
      )
  }))
}

  render() {
    const { colors } = this.state;
    return (
      <div className="app">
        <AddColorForm />
        <ColorList colors={colors} onRate={this.rateColor}/>
     </div>
    )
  }
}

export default App;
