import React,{Component} from 'react';

import './App.css';
import Header from './components/Header/header';
import Details from './components/Details/details';
import TextArea from './components/TextArea/textArea';
import MarkDown from './components/MarkDown/markDown';

class App extends Component{
  constructor(props){
    super(props);
    this.state=({text:"",fileName:"Untitled Doc"})
    this.onTextChange=this.onTextChange.bind(this);
    this.text2MD=this.text2MD.bind(this);
  }

  onTextChange(el){
    this.setState({text:el.target.value})
  }
  text2MD(){
    return {__html:this.converter.makeHtml(this.state.text)}
  }
  render(){
    return (
      <div className="appContainer">
        <Header/>
        <Details 
          wordCount={this.state.text.split(" ").length-1} 
          characterCount={this.state.text.length}
          fileName={this.state.fileName}
          setFileName={(el)=>{this.setState({fileName:el})}}
        />
        <div className="appSubContainer">
          <TextArea 
            text={this.state.text}
            setText={(el)=>{this.setState({text:el})}}/>
          <MarkDown
            text={this.state.text}/>
        </div>
      </div>
    );
  }
}

export default App;
