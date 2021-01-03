import React from 'react'
import './Button.css'

export default props =>{
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.duble ? 'duble': ''
    
    return(
        <button className={classes} onClick={el => props.click && props.click(props.label)} >
            {props.label}
        </button>
    )
}