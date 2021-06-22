 import React, { Component } from 'react';
 import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
 import DishDetail from './MenuDetails';

 class Menu extends Component {
 	
 	constructor(props) {
 		super(props);

 		this.state = {
 			selectedDish: null,
			 date: new Date(),
 		};
 	}

	Clock() {
		return (
			<span>{this.state.date.toLocaleTimeString()}.</span>
		);
	}

	tick() {
		this.setState({      date: new Date()    });  }

	componentDidMount() {
		this.timerID = setInterval(
		  () => this.tick(),
		  1000
		);
	}



 	onDishSelect(dish) {
		this.setState({ selectedDish: dish });
	}

	renderDish(dish) {
		if (dish != null) {
			return(
				<DishDetail dish={dish} num={dish.id}/>
			);
		}
		else {
			return (
				<div></div>
			);
		}
	}


 	render() {		 
 		const menu = this.props.dishes.map((dish) => {
 			return (
 				<div key={dish.id} className="col-12 col-md-3 m-0">
				 <div>{this.Clock()}</div>
 					<Card onClick={() => this.onDishSelect(dish)}>
 						<CardImg width="100%" src={dish.image} alt={dish.name} />
 						<CardImgOverlay>
 							<CardTitle>{dish.name}</CardTitle>
 						</CardImgOverlay>
 					</Card>
 				</div>
 			);
 		});

 		return (
			 
 			<div className="container">
 				<div className="row">
 					{menu}
 				</div>

 				<div className="row mt-4 mb-5">
				 <div className="col-12 col-sm-6 col-md-4">
 				   {this.renderDish(this.state.selectedDish)}
				 </div>
 				</div>
 			</div>
 		);
 	}

 }

 export default Menu;