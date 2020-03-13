import React,{Component} from 'react';
import Showdown from 'showdown'

import './App.css';
import Header from './components/Header/header';
import Details from './components/Details/details';

class App extends Component{
  constructor(props){
    super(props);
    this.state=({text:"",fileName:"Untitled Doc"})
    this.onTextChange=this.onTextChange.bind(this);
    this.text2MD=this.text2MD.bind(this);
  }
  componentWillMount(){
    this.converter=new Showdown.Converter();
  }

  onTextChange(el){
    this.setState({text:el.target.value})
  }
  text2MD(){
    return {__html:this.converter.makeHtml(this.state.text)}
  }
  render(){
    return (
      <div className="AppContainer">
        <Header/>
        <Details 
        wordCount={this.state.text.split(" ").length-1} 
        characterCount={this.state.text.length}
        fileName={this.state.fileName}
        setFileName={(el)=>{this.setState({fileName:el})}}
        />
        <div className="textContainer">
          <textarea value={this.state.text}
          onChange={this.onTextChange}/>
        </div>
        <div className="markdownContainer" 
        dangerouslySetInnerHTML={this.text2MD()}/>
      </div>
    );
  }
}

export default App;
