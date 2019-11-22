import React from 'react';


function Bar(props) {

    var level = String(props.level) + 'px';
    var barColor = String(props.barColor);
    console.log(level)
    var bar = {
        width: "50px",
        maxHeight: "400px",
        height: level,
        background: barColor
    }


    return (
        <div>
            <div style={bar}>

            </div>
            <p>{props.level}</p>
        </div>
    )
}



export default Bar;