import React,{Component} from 'react';

import './App.css';
import Header from './components/Header/header';
import Details from './components/Details/details';
import TextArea from './components/TextArea/textArea';
import MarkDown from './components/MarkDown/markDown';

const themeDay = {
  '--detailsBar-color': 'white',
  '--markDown-bg-color':'white',
  '--markDown-font-color':'black',
  '--details-bg-color':'white',
  '--details-font-color':'black',
  '--border-opacity':'#e8e8e8'
};
const themeNight = {
  '--detailsBar-color': 'white',
  '--markDown-bg-color':'#1f2430',
  '--markDown-font-color':'#cbccc6',
  '--details-bg-color':'#373d49',
  '--details-font-color':'white',
  '--border-opacity':'#e8e8e881'
};

const starterTemplate="GitHub Flavored Markdown\n========================\nEverything from markdown plus GFM features:smile:"

class App extends Component{
  constructor(props){
    super(props);
    this.state=({text:starterTemplate,fileName:"Untitled Doc",darkMode:'false'})
    this.onTextChange=this.onTextChange.bind(this);
    this.text2MD=this.text2MD.bind(this);
  }
  componentDidMount(){
    this.updateCSSVariables(!this.state.darkMode?themeNight:themeDay)
  }
  componentWillUpdate(nextProps,nextState){
    if(nextState.darkMode!==this.state.darkMode){
      this.updateCSSVariables(nextState.darkMode?themeDay:themeNight)
    }
  }
  onTextChange(el){
    this.setState({text:el.target.value})
  }
  text2MD(){
    return {__html:this.converter.makeHtml(this.state.text)}
  }
  updateCSSVariables(el) {   
    for (const [key, value] of Object.entries(el)) {
      document.documentElement.style.setProperty(key, value);
    }
  }
  render(){
    return (
      <div className="appContainer">
        <Header 
        text={this.state.text}
        fileName={this.state.fileName}
        toggleTheme={()=>{this.setState({darkMode:!this.state.darkMode})}}
        />
        <Details 
          wordCount={this.state.text!==""?(this.state.text.split(' ').length):0} 
          characterCount={this.state.text.length}
          fileName={this.state.fileName}
          setFileName={(el)=>{this.setState({fileName:el})}}
        />
        <div className="appSubContainer">
          <TextArea 
            text={this.state.text}
            setText={(el)=>{this.setState({text:el})}}
            darkMode={this.state.darkMode}/>
          <MarkDown
            text={this.state.text}
           />
        </div>
      </div>
    );
  }
}

export default App;
