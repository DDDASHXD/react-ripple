import React, { useEffect, useState } from "react";
import { Ripple } from "./lib";
import Nav from "./nav";
import github from "./github.png";
import "./main.scss";
import Tryout from "./tryout";
import { CopyBlock, dracula } from "react-code-blocks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Documentation from "./views/documentation";
import Props from "./views/props";
import Styles from "./views/styles";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="header">
                    <div className="wrapper">
                        <div className="title">
                            <h1>React Ripple</h1>
                            <p>
                                Material-like ripples when clicking
                                <br />
                                on <i>any</i> element.
                            </p>
                        </div>
                        <div className="info">
                            <div className="labels">
                                <p>Install</p>
                                <p>Import</p>
                                <p>Source</p>
                            </div>
                            <div className="value">
                                <p className="code">
                                    npm install react-ripple <i>or</i> yarn add
                                    react-ripple
                                </p>
                                <p className="code">
                                    <span className="red">import</span>{" "}
                                    {"{ Ripple }"}{" "}
                                    <span className="red">from</span>{" "}
                                    <span className="blue">'react-ripple'</span>
                                </p>
                                <div className="source">
                                    <img src={github} alt="" />
                                    <p>View source code</p>
                                </div>
                            </div>
                        </div>
                        <Nav />
                    </div>
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Documentation />} />
                        <Route
                            path="/documentation"
                            element={<Documentation />}
                        />
                        <Route path="/props" element={<Props />} />
                        <Route path="/styles" element={<Styles />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
