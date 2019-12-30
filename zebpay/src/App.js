import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './components/navbar'
import Body from './components/body'
import Footer from './components/footer'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      images :[
        "/forbes.png",
        "/enterpreneur.png",
        "/bitcoin.png",
        "/tnw.png",
        "/logo-6.png",
        "/quartz.png",
        "/coindesk.png",
        "/logo-11.png",
        "/logo-12.png",
        "/logo-13.png",
        "/logo-14.png",
        "/logo-15.png",
        "/logo-16.png",
        "/logo-17.png"
      ]
    }
  }
  render(){
    return(
      <div>
        <Navbar />
        <Body />
        <div>
          <Footer companyLogos = {this.state.images} />       
        </div>
      </div> 
      )     
  }
}
export default App;
