import React from "react";

const Styles = () => {
    return (
        <div className="styles">
            <h2>Styles</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Selector</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Container</td>
                        <td>
                            <p>
                                <span className="blue">.rippleContainer</span>
                            </p>
                        </td>
                        <td>The container of the ripple element</td>
                    </tr>
                    <tr>
                        <td>Ripple</td>
                        <td>
                            <p>
                                <span className="blue">.ripple</span>
                            </p>
                        </td>
                        <td>The ripple itself.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Styles;
