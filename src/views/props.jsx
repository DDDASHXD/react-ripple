import React from "react";

const Props = () => {
    return (
        <div className="props">
            <h2>Component props</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>children</td>
                        <td>
                            <p>
                                <span className="blue">ReactNode</span>
                            </p>
                        </td>
                        <td>The children of the component</td>
                    </tr>
                    <tr>
                        <td>color</td>
                        <td>
                            <p>
                                <span className="blue">String</span>
                            </p>
                        </td>
                        <td>Set the color of the ripple.</td>
                    </tr>
                    <tr>
                        <td>duration</td>
                        <td>
                            <p>
                                <span className="blue">Number</span>
                            </p>
                        </td>
                        <td>Set the duration of the ripple in miliseconds.</td>
                    </tr>
                    <tr>
                        <td>opacity</td>
                        <td>
                            <p>
                                <span className="blue">Number</span>
                            </p>
                        </td>
                        <td>Set the opacity of the ripple.</td>
                    </tr>
                    <tr>
                        <td>className</td>
                        <td>
                            <p>
                                <span className="blue">String</span>
                            </p>
                        </td>
                        <td>
                            Set a custom class name for the ripple container.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Props;
