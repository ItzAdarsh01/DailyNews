import "./index.css";
import Navbar from "./Components/Navbar"
import News  from "./Components/News"
import React, { Component } from 'react'
import {
  Route,Routes,
  BrowserRouter
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
      <p className="text-center">Hi there, if you wanna know what's going around in the world this is the perfect place for you...</p>
      <h2 className="text-center"><span className="hdnsty">DailyNews</span></h2>
        <Routes>
       
  <Route exact path="/" element={<News key="general" category="general"/>}></Route>
  <Route exact path="/business" element={<News key="business" category="business"/>}></Route>
  <Route exact path="/technology" element={<News key="tech" category="technology"/>}></Route>
  <Route exact path="/health" element={<News key="health" category="health"/>}></Route>
  <Route exact path="/sports" element={<News key="sports" category="sports"/>}></Route>
  <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment"/>}></Route>
  
  </Routes>
  <h6>Created By:Adarsh Kasaudhan</h6>
</BrowserRouter>
         
    )
  }
}
