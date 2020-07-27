import React from 'react';

//the number display component for each digit
function NumberDisplay(props) {

    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const {num} = props;
    return (
        <div className={'box'}>
            <div className={'num'} style={{top: -18 * num + "px"}}>
                {/*generate digit number column*/}
                {nums.map((item, index) => {
                    return (<div key={index}>
                        {item}
                    </div>)
                })}
            </div>
        </div>
    );

}

export default NumberDisplay;