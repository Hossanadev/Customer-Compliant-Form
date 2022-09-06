import React from "react";

const Button = (props) => {
    return (
                <button className="btn btn-lg"
                        onClick={props.onButtonClick}
                        style={{backgroundColor: props.backgroundColor,
                                margin: "10px", color: props.color}}
                        >
                        {props.title}
                </button>
    )
}

export default Button;