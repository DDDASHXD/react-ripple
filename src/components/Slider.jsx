import React, { useRef, useState, useEffect } from "react";
import "./slider.scss";

const Slider = (props) => {
    const [value, setValue] = useState(props.value);
    const [step, setStep] = useState(props.step);
    const [max, setMax] = useState(props.max);
    const [min, setMin] = useState(props.min);

    const [steps, setSteps] = useState([]);
    const stepsRef = useRef([]);

    const container = useRef();
    const thumb = useRef();
    const range = useRef();
    const slide = useRef();

    const handleDrag = (e) => {
        e.preventDefault();
        const containerBounds = container.current.getBoundingClientRect();
        const thumbBounds = thumb.current.getBoundingClientRect();

        let closest;
        stepsRef.current.forEach((step, i) => {
            // move thumb to the closest step
            if (closest === undefined) {
                closest = step;
            }
            const stepBounds = step.getBoundingClientRect();
            if (stepBounds.left < e.clientX) {
                closest = step;
            }
        });
        thumb.current.style.left = `${
            closest.getBoundingClientRect().left -
            containerBounds.left -
            thumbBounds.width / 2
        }px`;
        slide.current.style.width = `${
            thumbBounds.left + 5 - containerBounds.left
        }px`;
        setValue(closest.dataset.value);
        range.current.value = closest.dataset.value;
    };

    useEffect(() => {
        const steps = [];
        if (step && max && min) {
            for (let i = min; i <= max; i += step) {
                steps.push(
                    <div
                        className="step"
                        ref={(el) => (stepsRef.current[i] = el)}
                        key={i}
                        data-value={i}
                    ></div>
                );
            }
            setSteps(steps);
            console.log(steps);
        }

        if (!props.value) setValue(min);
        if (!props.min) setMin(0);
        if (!props.max) setMax(100);
        // if (!props.step) setStep(1);
    }, [props.min, props.max, props.step]);

    useEffect(() => {
        if (props.onChange) {
            props.onChange(value);
        }
    }, [value]);

    useEffect(() => {
        if (props.value) {
            setValue(props.value);
            range.current.value = props.value;
        }
        // move thumb to the step that has a data-value equal to the value prop
        stepsRef.current.forEach((step, i) => {
            if (step.dataset.value === props.value.toString()) {
                const containerBounds =
                    container.current.getBoundingClientRect();
                const thumbBounds = thumb.current.getBoundingClientRect();
                thumb.current.style.left = `${
                    step.getBoundingClientRect().left -
                    containerBounds.left -
                    thumbBounds.width / 2
                }px`;
                slide.current.style.width = `${
                    thumbBounds.left + 5 - containerBounds.left
                }px`;
            }
        });
    }, [props.value]);

    return (
        <>
            <div
                className="slider"
                ref={container}
                onDrag={(e) => handleDrag(e)}
                onDragEnd={(e) => handleDrag(e)}
            >
                <input
                    type="range"
                    style={{ display: "none" }}
                    ref={range}
                    onChange={(e) => console.log("A")}
                />
                <div className="track">
                    <div className="slide" ref={slide}></div>
                    {steps}
                </div>
                <div className="thumb" ref={thumb}></div>
            </div>
            {value}
        </>
    );
};

export default Slider;
