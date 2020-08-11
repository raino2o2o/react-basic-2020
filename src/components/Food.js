import React, { Component } from 'react';

class Foodpick extends Component{
  render(){
    var list = [];
		var food  = null;
		var _data = this.props.data;
		var i = 0;

		while( i < _data.length ){
			var isOn = Number(_data[i].id) === this.props.selected ? 'on' : '';
			list.push(
				<li key={_data[i].id}>
					<a href="/" 
						className={isOn}
						onClick={function(id , e){
							e.preventDefault();
							this.props.onChangeMenu(id);
						}.bind(this, _data[i].id)}
					>
						{_data[i].title}
					</a>
				</li>
			);
			food = _data[this.props.selected-1].food;
			
			i = i + 1;
    }
    
    return(
      <div>
        <strong>점심메뉴고르기</strong>
				<ul className="list_cate">
					{list}
				</ul>
				<div className="result_food">냠냠냠~~~ {food}</div>
      </div>
    );
  }
}

export default Foodpick;