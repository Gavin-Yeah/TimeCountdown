import React, { Component } from 'react';
import Timer from "./Timer";


class CountDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: 0,
            min: 0,
            sec: 0
        }
    }

    //the function to get the remain time
    tick = () => {
        const cur = Date.now();
        let remain = this.props.time - cur;
        //if remain time is less or equal than 0, return
        if (remain <= 0) return;
        let hour = Math.floor(remain / 1000 / 60 / 60);
        remain = remain - hour * 1000 * 60 * 60;
        let min = Math.floor(remain / 1000 / 60);
        remain -= min * 1000 * 60;
        let sec = Math.floor(remain / 1000);
        // console.log(remain, hour, min, sec);

        this.setState({
            hour: hour,
            min: min,
            sec: sec
        })
    };

    componentDidMount() {
        // execute tick() once every second
        this.timeID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        //when the component needs to unmount clear interval to release memory
        clearInterval(this.timeID);
    }

    render() {
        return (
            <div className={"countdown"}>
                <Timer num={this.state.hour}/>
                <Timer num={this.state.min}/>
                <Timer num={this.state.sec}/>
            </div>
        );
    }
}

export default CountDown;