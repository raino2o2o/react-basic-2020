import React, { Component } from 'react';
import './App.css';
import Food from './components/Food';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected_food_id: 1,
      food_category:[
        {id:'1', title: '한식', food: '된장찌개, 비빔밥'},
        {id:'2', title: '중식', food: '자장면, 탕수육'},
        {id:'3', title: '양식', food: '파스타, 피자'}
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <Food 
            selected={this.state.selected_food_id}
            data={this.state.food_category}
            onChangeMenu={function(id){
              this.setState({
                selected_food_id : Number(id)
              })
            }.bind(this)}
          />
      </div>
    );
  }
}

export default App;
