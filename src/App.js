import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import Main from './components/MainComponent';
//import 'font-awesome/css/font-awesome.min.css';
import './App.css';
/*import { DISHES } from './shared/dishes';*/


class App extends Component {

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}


export default App;
