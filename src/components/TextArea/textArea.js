import React from 'react'

import './textArea.css'

const TextArea = (props) =>{
    return(
      <div className="textContainer">
        <div className="textTitle">Text</div>
        <div className="textSubContainer">
          <textarea value={props.text}
            onChange={(el)=>props.setText(el.target.value)}/>
        </div>
      </div>
    )
}

export default TextArea;