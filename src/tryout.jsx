import React, { useEffect, useState } from "react";
import { Ripple } from "./lib";
import { CopyBlock, dracula } from "react-code-blocks";

const Tryout = () => {
    const [elementValue, setElementValue] = useState("button");
    const [colorValue, setColorValue] = useState("#1B1B1B");
    const [radiusValue, setRadiusValue] = useState(5);
    const [opacityValue, setOpacityValue] = useState(0.25);
    const [durationValue, setDurationValue] = useState(1000);

    const [elementCodeValue, setElementCodeValue] = useState(
        `<button>Click me</button>`
    );

    const swatches = [
        { color: "#1B1B1B", label: "black" },
        { color: "#8D8D8D", label: "gray" },
        { color: "#dcdcdc", label: "white" },
        { color: "#EB4444", label: "red" },
        { color: "#E8427D", label: "pink" },
        { color: "#9F42E8", label: "purple" },
        { color: "#42A2E8", label: "blue" },
        { color: "#42E8AC", label: "cyan" },
        { color: "#59E842", label: "green" },
    ];

    useEffect(() => {
        if (elementValue === "button") {
            setElementCodeValue(`<button>
                Click me
            </button>`);
        } else if (elementValue === "input") {
            setElementCodeValue(`<input type="text" />`);
        } else if (elementValue === "img") {
            setElementCodeValue(`<img src="http://localhost/img.png" />`);
        }
    }, [elementValue]);

    return (
        <>
            <div className="tryout">
                <div className="canvas">
                    {elementValue === "button" ? (
                        <Ripple
                            color={colorValue}
                            opacity={opacityValue}
                            duration={durationValue}
                        >
                            <button
                                className="previewButton"
                                style={{ borderRadius: radiusValue }}
                            >
                                Hello world
                            </button>
                        </Ripple>
                    ) : elementValue === "input" ? (
                        <Ripple
                            color={colorValue}
                            opacity={opacityValue}
                            duration={durationValue}
                        >
                            <input
                                placeholder="Cool beans!"
                                style={{ borderRadius: radiusValue }}
                            />
                        </Ripple>
                    ) : elementValue === "img" ? (
                        <Ripple
                            color={colorValue}
                            opacity={opacityValue}
                            duration={durationValue}
                        >
                            <img
                                src="https://w.wallhaven.cc/full/k7/wallhaven-k7v9yq.png"
                                alt=""
                                style={{ borderRadius: radiusValue }}
                            />
                        </Ripple>
                    ) : (
                        <div className="">Thats a weird error</div>
                    )}
                </div>
                <div className="controls">
                    <div className="control">
                        <p className="label">Element</p>
                        <select
                            name=""
                            id=""
                            onChange={(e) => setElementValue(e.target.value)}
                        >
                            <option value="button">Button</option>
                            <option value="input">Input</option>
                            <option value="img">Image</option>
                        </select>
                    </div>
                    <div className="control">
                        <p className="label">Radius</p>
                        <input
                            type="range"
                            onChange={(e) =>
                                setRadiusValue(Number(e.target.value))
                            }
                            max="50"
                            value={radiusValue}
                        />
                    </div>
                    <div className="control">
                        <p className="label">Opacity</p>
                        <input
                            type="range"
                            onChange={(e) =>
                                setOpacityValue(Number(e.target.value))
                            }
                            max="1"
                            step="0.01"
                            value={opacityValue}
                        />
                    </div>
                    <div className="control">
                        <p className="label">Color</p>
                        <div className="swatches">
                            {swatches.map((swatch, i) => (
                                <div
                                    className="swatch"
                                    key={i}
                                    style={{ background: swatch.color }}
                                    onClick={() => setColorValue(swatch.color)}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="control">
                        <p className="label">Duration(ms)</p>
                        <input
                            type="number"
                            defaultValue="1000"
                            onChange={(e) => setDurationValue(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="codeBlock">
                <CopyBlock
                    text={`import { Ripple } from "@dashistrash/ripple";

const App = () => {
    return (
        <Ripple
            color="${colorValue}"
            opacity={${opacityValue}}
            duration={${durationValue}}
        >
            ${elementCodeValue}
        </Ripple>
    )
}`}
                    language="jsx"
                    showLineNumbers={true}
                    theme={dracula}
                />
            </div>
        </>
    );
};

export default Tryout;
