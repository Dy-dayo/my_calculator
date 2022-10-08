

import React, { useState } from "react"

import Operators from './Operators.jsx'
import Nums from './Nums.jsx'

import './calc.css'

let numbers = ["9","8","7","6","5","4","3","2","1","0","00"]





export default function Calc() {

    let [num, setNum] = useState("")

    let ops = ["+", "-", "/", "*", "."]


    function displayKey(event) {
        const { value } = event.target
        if (
            ops.includes(value) && ops.includes(num.slice(-1))
        ) { return }

        setNum(prevNum => {
            return prevNum += value
        })
    }

    function del() {
        setNum(prevNum => prevNum.slice(0, -1))
    }

    function theResult() {
        setNum(prevNum => eval(prevNum).toString())
    }

    function clearr() {
        setNum("")
    }
    let myNumbers= numbers.map(nums=>{
        return <Nums num={nums} key={nums} onClick={displayKey}/>
    })


    return (

        <div className="calc">
            <p id="title">Oladayo's Simple Calculator</p>
            <p id="input-fd">{num}</p>
            <input type="button" id="clear" value="C" placeholder="C" onClick={clearr} />
            <input type="button" id="delete" value="del" placeholder="del" onClick={del} />
            <input type="button" id="result" value="=" placeholder="=" onClick={theResult} />

            <Operators onClick={displayKey}/>
            {myNumbers}
        </div>
    )
}
