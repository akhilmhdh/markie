import React,{Component} from 'react'
import Showdown from 'showdown';

import './markDown.css'

class MarkDown extends Component{
    constructor(props){
        super(props);
        this.state=({code:false})
        this.text2MD=this.text2MD.bind(this);
        this.changeView=this.changeView.bind(this);
    }
    componentWillMount(){
        this.converter=new Showdown.Converter({emoji: true});
    }
    changeView(){
        this.setState({code:!this.state.code})
    }
    text2MD(){
        return {__html:this.converter.makeHtml(this.props.text)}
      }
   render(){
    return(
        <div className="markdownContainer">
            <div className="markdownOptionsContainer">
                <div>PREVIEW</div>
                <div className="markdownToggle"
                onClick={this.changeView}
                >&lt; / &gt;</div>
            </div>
            {this.state.code
            ?<div className="markdownOutput">
                {this.converter.makeHtml(this.props.text)}
            </div>
            :<div className="markdownOutput"
            dangerouslySetInnerHTML={this.text2MD()}/>}           
        </div>
    )
   }
}

export default MarkDown