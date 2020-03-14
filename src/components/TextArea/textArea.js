import React,{Component} from 'react'
import Codemirror from 'codemirror'


import 'codemirror/lib/codemirror.css'
import './textArea.css'
import 'codemirror/theme/xq-light.css'
import 'codemirror/theme/ayu-mirage.css'
require('codemirror/mode/gfm/gfm')

class TextArea extends Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount(){
    this.myCodeMirror=Codemirror.fromTextArea(this.myRef.current,{
      value:this.props.text,
      lineNumbers: true,
      mode: 'gfm',
      theme:"xq-light"
    })
    this.myCodeMirror.on("change",(cm,change)=>{this.props.setText(this.myCodeMirror.getValue())})
  }
  componentWillUpdate(nextProps,nextState){
    if(nextProps.darkMode!==this.props.darkMode){
      this.myCodeMirror.setOption("theme",nextProps.darkMode?"xq-light":"ayu-mirage")
    }
  }
   render(){
    return(
      <div className="textContainer">
        <div className="textTitle">MARKDOWN{console.log(this.props.darkMode)}</div>
        <div className="textSubContainer">
          <textarea value={this.props.text} ref={this.myRef}/>
        </div>
      </div>
    )
   }
}

export default TextArea;