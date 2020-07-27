import React, { Component } from 'react';
import tag from "../tag.png";
import CountDown from "./CountDown";

class Container extends Component {
    state = {
        input:"",
        time : Date.now()
    };
    inputHandler = (e)=>{
        this.setState({
            input:e.target.value
        })
    };

    submit = ()=>{
        //if input is <=0 or bigger>=60*99 (99 hours) alert user to input a valid number
        if(this.state.input>=60*99||this.state.input<=0){
           alert('please input 0<=num<=1440 ')
        }
        this.setState({
            time: parseInt(this.state.input)*1000*60+ Date.now()
        })
    };

    render() {

        return (

                <div className={'container'}>
                    <div className="header">
                        <div><img src={tag} alt="flash deals" className={'tagImg'}/></div>
                        <CountDown time={this.state.time}/>
                    </div>
                    <div className={"body"}>
                        {/*input valid number to set the timer*/}
                        <label>Input time in min<input type="text" onChange={this.inputHandler}/></label>
                        <button onClick={this.submit}>count down</button>
                    </div>

                </div>

        );
    }
}

export default Container;