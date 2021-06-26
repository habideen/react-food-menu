import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './MenuDetails';
import { DISHES } from '../shared/dishes';


class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: 0
    };
  }


  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }


  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href='/'>Bravytech Brand</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}/>
        <div className="container mt-4">
            <DishDetail mem={this.state.selectedDish}
                dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
      </div>
    );
  }
}


export default Main;
