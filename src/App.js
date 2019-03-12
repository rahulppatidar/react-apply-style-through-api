import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import {ApplyDesign} from './config/designConfig';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';

class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state={
  //     style:null
  //   }
  // }

  // SetProperty(property, propValue){

  //   if(!propValue) return;

  //     if(propValue.constructor === Array){
  //       if(property==='--fontFamily'){
  //         document.documentElement.style.setProperty(property, propValue.map(f => {
  //           console.log(f);
  //           console.log(f.trim().match(/\s/g));
  //           return f.trim().match(/\s/g) !==null  ? "'"+f+"'" : f;
  //         }).join(','),"important");
  //       }      
        
  //     }else{
  //       console.log(property, propValue); 

  //       document.documentElement.style.setProperty(property, propValue ,"important");
  //     }
  // }

  // ApplyDesign = () =>{    
  //   const style = this.state.style;
  //   if(!style) return;
  //   console.log("style apply",style);
    
  //   this.SetProperty('--fontColor',style.color);
  //   this.SetProperty('--fontFamily',style.fontFamily);
  //   this.SetProperty('--backgroundColor',style.backgroundColor); 

  // }

  componentDidMount(){
    fetch('/design.json')
    .then(res => res.json())
    .then(res => {
      const style = res.data;
      this.setState({style});
     // this.ApplyDesign();
     ApplyDesign(style);
    })
    .catch(err => console.log("Fetch Error ",err));
  }
  render() {     
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>        
        <Switch>          
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} exact component={About} />
        </Switch>        
      </div>
    );
  }
}

export default App;
