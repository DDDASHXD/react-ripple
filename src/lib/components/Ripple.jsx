import React, { useEffect, useState, useRef } from "react";
import "./Ripple.css";

const Ripple = (props) => {
    const [ripples, setRipples] = useState([]);
    const rippleContainer = useRef(null);
    const el = useRef(null);
    const [styling, setStyling] = useState(null);

    const getBorderRadius = () => {
        if (el.current) {
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
        }
    };

    const addRipple = (e) => {
        const rippleBounds = rippleContainer.current.getBoundingClientRect();
        getBorderRadius();

        setRipples([
            ...ripples,
            {
                x: e.clientX - rippleBounds.left,
                y: e.clientY - rippleBounds.top,
                color: props.color,
                overlay:
                    props.children.type === "img" ||
                    props.children.type === "input"
                        ? true
                        : false,
            },
        ]);
    };

    useEffect(() => {
        getBorderRadius();
    }, []);

    let rippleMap = ripples.map((ripple, i) => {
        return (
            <div
                className={`ripple ${ripple.overlay ? "overlay" : ""}`}
                key={i}
                style={{
                    left: ripple.x,
                    top: ripple.y,
                    backgroundColor: ripple.color,
                    "--duration": `${props.duration ? props.duration : 1000}ms`,
                    "--opacity": `${props.opacity ? props.opacity : 0.25}`,
                }}
            ></div>
        );
    });

    return (
        <div
            className="rippleContainer"
            onClick={(e) => addRipple(e)}
            onContextMenu={(e) => addRipple(e)}
            ref={rippleContainer}
            style={{
                ...styling,
            }}
        >
            {React.cloneElement(props.children, {
                className: `${props.children.props.className} rippleElement`,
                ref: el,
            })}
            {rippleMap}
        </div>
    );
};

export default Ripple;
