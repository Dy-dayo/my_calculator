import React from "react"

export default function Operators(props){// Ment to be in it own component
    return(
        <> 
            <input type="button" value="/" placeholder="/" id="/" onClick={props.onClick} />
            <input type="button" value="*" placeholder="*" id="*" onClick={props.onClick} />
            <input type="button" value="-" placeholder="-" onClick={props.onClick} />
            <input type="button" value="+" placeholder="+" onClick={props.onClick} />
            <input type="button" value="." placeholder="." onClick={props.onClick} />
        </>
    )
}