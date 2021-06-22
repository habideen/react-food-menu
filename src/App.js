import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import File from './components/File';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }


  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href='/'>Bravytech Brand</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}


export default App;
