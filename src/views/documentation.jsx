import React from "react";
import { Ripple } from "../lib";
import { CopyBlock, dracula } from "react-code-blocks";
import Tryout from "../tryout";

const Documentation = () => {
    const text = {
        opacity: `<Ripple opacity={0.75} >
        <button>Custom opacity!</button>
    </Ripple>`,
        color: `<Ripple color="red">
        <button>Custom color!</button>
    </Ripple>`,
        duration: `<Ripple duration={500}>
        <button>Custom duration!</button>
    </Ripple>`,
    };

    return (
        <div className="documentation">
            <section>
                <h2>Usage</h2>
                <Tryout />
            </section>
            <section>
                <h2>Custom opacity</h2>
                <p>
                    You can set the opacity of the ripples by using the{" "}
                    <i>opacity</i> prop.
                </p>
                <div className="preview">
                    <Ripple opacity={0.25}>
                        <button className="previewButton">0.25</button>
                    </Ripple>
                    <Ripple opacity={0.5}>
                        <button className="previewButton">0.50</button>
                    </Ripple>
                    <Ripple opacity={1}>
                        <button className="previewButton">1</button>
                    </Ripple>
                </div>
                <div className="codeBlock">
                    <CopyBlock
                        text={text.opacity}
                        language="jsx"
                        showLineNumbers={true}
                        theme={dracula}
                    />
                </div>
            </section>
            <section>
                <h2>Custom color</h2>
                <div className="preview">
                    <Ripple color={"#EB4444"}>
                        <button className="previewButton white">Red</button>
                    </Ripple>
                    <Ripple color={"#59E842"}>
                        <button className="previewButton white">Green</button>
                    </Ripple>
                    <Ripple color={"#42A2E8"}>
                        <button className="previewButton white">Blue</button>
                    </Ripple>
                </div>
                <div className="codeBlock">
                    <CopyBlock
                        text={text.color}
                        language="jsx"
                        showLineNumbers={true}
                        theme={dracula}
                    />
                </div>
            </section>
            <section>
                <h2>Custom duration</h2>
                <div className="preview">
                    <Ripple duration={1000}>
                        <button className="previewButton">1 second</button>
                    </Ripple>
                    <Ripple duration={500}>
                        <button className="previewButton">0.5 seconds</button>
                    </Ripple>
                    <Ripple duration={3000}>
                        <button className="previewButton">3 seconds</button>
                    </Ripple>
                </div>
                <div className="codeBlock">
                    <CopyBlock
                        text={text.duration}
                        language="jsx"
                        showLineNumbers={true}
                        theme={dracula}
                    />
                </div>
            </section>
        </div>
    );
};

export default Documentation;
