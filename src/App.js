import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import Main from './components/MainComponent';
//import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
