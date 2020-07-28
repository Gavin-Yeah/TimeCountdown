import React, { Component } from 'react';
import NumberDisplay from "./NumberDisplay";


//the timer box component for hour/min/sec
function Timer (props) {

        const {num} = props;
        //the left number of the time
        const left = Math.floor(num / 10) === 0 ? 0 : Math.floor(num / 10);
        //the right number of the time
        const right = num % 10;

        return (
            <div className={"clock"}>
                <NumberDisplay num={left}/>
                <NumberDisplay num={right}/>
            </div>
        );

}

export default Timer;