import React, { useEffect, useState, useRef } from "react";
import "./Ripple.scss";

const Ripple = (props) => {
    const [ripples, setRipples] = useState([]);
    const rippleContainer = useRef(null);
    const el = useRef(null);
    const [styling, setStyling] = useState(null);

    const addRipple = (e) => {
        const rippleBounds = rippleContainer.current.getBoundingClientRect();
        if (!styling && el.current) {
            setStyling({
                borderRadius: window
                    .getComputedStyle(el.current)
                    .getPropertyValue("border-radius"),
                borderTopLeftRadius: window
                    .getComputedStyle(el.current)
                    .getPropertyValue("border-top-left-radius"),
                borderTopRightRadius: window
                    .getComputedStyle(el.current)
                    .getPropertyValue("border-top-right-radius"),
                borderBottomLeftRadius: window
                    .getComputedStyle(el.current)
                    .getPropertyValue("border-bottom-left-radius"),
                borderBottomRightRadius: window
                    .getComputedStyle(el.current)
                    .getPropertyValue("border-bottom-right-radius"),
            });
            console.log("styling", styling);
        }
        console.log("styling", styling);

        setRipples([
            ...ripples,
            {
                x: e.clientX - rippleBounds.left,
                y: e.clientY - rippleBounds.top,
            },
        ]);
    };

    return (
        <div
            className="rippleContainer"
            onClick={(e) => addRipple(e)}
            onContextMenu={(e) => addRipple(e)}
            ref={rippleContainer}
            style={styling}
        >
            {/* Copy the props.children element */}
            {props.children.type !== "img" &&
            props.children.type !== "input" ? (
                <>
                    {React.cloneElement(props.children, {
                        // Add the ripple effect
                        className: `${props.children.props.className} rippleElement`,
                        style: {
                            overflow: "hidden",
                            position: "relative",
                            isolation: "isolate",
                        },
                        children: [
                            ...props.children.props.children,
                            <>
                                {ripples.map((ripple, index) => (
                                    <div
                                        className="ripple"
                                        style={{
                                            left: ripple.x,
                                            top: ripple.y,
                                        }}
                                    ></div>
                                ))}
                            </>,
                        ],
                    })}
                </>
            ) : (
                <>
                    {React.cloneElement(props.children, {
                        className: `${props.children.props.className} rippleElement`,
                        ref: el,
                    })}
                    {ripples.map((ripple, index) => (
                        <div
                            className="ripple overlay"
                            style={{
                                left: ripple.x,
                                top: ripple.y,
                            }}
                        ></div>
                    ))}
                </>
            )}

            {/* get children props */}
        </div>
    );
};

export default Ripple;
