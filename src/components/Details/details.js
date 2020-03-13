import React from 'react'

import "./details.css"

const Details =(props)=>{
    return(
    <div className="detailsContainer">
        <div className="documentTitle">
            <label>Document Title</label>
            <input value={props.fileName} 
            onChange={(el)=>{
                props.setFileName(el.target.value);
            }}
            onBlur={(el)=>props.fileName.length===0?props.setFileName("Untitled Doc"):null}/>
        </div>
        <div className="documentDetails">
            <div>WORDS: {props.wordCount}</div>
            <div>CHARACTERS: {props.characterCount}</div>
        </div>
    </div>
    )
}

export default Details;