import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {Route} from 'react-router-dom'
import Education from './components/Education'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Home from './components/Home'
import Languages from './components/Languages'
import Animation from './components/Animation'
import Certificates from './components/Certificates'
class App extends React.Component {
  state={
    details:[
        {id:1,class:'10th',school:'Sardar Patel Inter College',percentage:'86%',year:"2014"},
        {id:2,class:'12th',school:'Sardar Patel Inter College',percentage:'88%',year:"2016"},
        {id:3,class:'B.Tech',school:'Lovely Professional University',percentage:'75%',year:"2017-2021"}
    ],
    languages:[
      {id:1,title:'c++',prof:'Average'},
      {id:2,title:'React Js',prof:'Average'},
      {id:3,title:'HTML',prof:'Average'},
      {id:4,title:'CSS',prof:'Average'},
      {id:5,title:'JavaScript',prof:'Average'},
      {id:6,title:'Node JS',prof:'learning..'}
    ],
    projects:[
      {id:1,Language:'c++',title:'Fantasy Cricket Legue',qualities:"I have this project in First year of engeeneering. This project was made with the concept of OOPS in CPP."},
      {id:2,Language:'HTML CSS JavaScript',title:'Cricket Website',qualities:"Cricket website is the project which I have done in 2nd semester and I designed the front page."},
      {id:3,Language:'HTML CSS JavaScript',title:'Restorent Website',qualities:"I have this project in First year of engeeneering. This project was made with the concept of OOPS in CPP."},
      {id:4,Language:'Node JS',title:'Weather App',qualities:"On entering the location User gets the details about the weather."}
    ],
    certificates:[
      {id:1,Language:'Data-Structure',title:'Negerros Bootcamp',qualities:"Implementation Of Data-Structures in C++."},
      {id:2,Language:'Bootstrap 4',title:'Coursera',qualities:'Front-end Design using Bootstrap 4.'},
      {id:3,Language:'Algorithm-ToolBox',title:'Coursera',qualities:'Basic Problem Solving'},
      {id:4,Language:'Data-Structures',title:'Coursera',qualities:'Basic Data-Structures'}
    ]
  }
  render(){
    return (   <div class="wrapper">
                <Animation></Animation>
                <div class="menu">
                <div class="nav1"><Navbar></Navbar></div>
                <div class="div1">
                <Route exact path="/" component={Home}></Route>
                 <Route path="/education" render={()=><Education details={this.state.details}></Education>}></Route>
                 <Route path="/certificate" render={()=><Certificates details={this.state.certificates}></Certificates>}></Route>
                 <Route path="/projects" render={()=><Projects details={this.state.projects}></Projects>}></Route>
                <Route path="/languages" render={()=><Languages details={this.state.languages}></Languages>}></Route>
                </div>
                </div>
                </div>
    );
  }
}

export default App;
