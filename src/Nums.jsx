import React from "react"


export default function Nums(props){ //ment to be in its own component
    return(
        <input type="button" value={props.num} placeholder={props.num} onClick={props.onClick} />
    )
}