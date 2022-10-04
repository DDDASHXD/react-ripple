import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWindowSize from "./useWindowSize";

const Nav = () => {
    const [active, setActive] = useState(0);
    const [cords, setCords] = useState({ x: 0, y: 0 });
    const size = useWindowSize();
    const links = [
        {
            label: `${size.width > 470 ? "Documentation" : "Docs"}`,
            href: "/documentation",
        },
        {
            label: `${size.width > 470 ? "Component Props" : "Props"}`,
            href: "/props",
        },
        { label: "Styles", href: "/styles" },
    ];
    const navigate = useNavigate();

    useEffect(() => {
        const el = document.getElementById(`navlink-${active}`);
        const rect = el.getBoundingClientRect();
        const containerRect = document
            .getElementById("nav")
            .getBoundingClientRect();

        setCords({
            x: rect.left - containerRect.left,
            y: rect.top,
            width: rect.width,
        });
        navigate(links[active].href);
    }, [active]);

    return (
        <div className="nav" id="nav">
            <div
                className="navlinkbg"
                style={{ left: cords.x, width: cords.width }}
            />
            {links.map((link, i) => {
                return (
                    <div
                        className={`navitem ${active == i ? "active" : ""}`}
                        key={i}
                        onClick={() => setActive(i)}
                        id={`navlink-${i}`}
                    >
                        {link.label}
                    </div>
                );
            })}
        </div>
    );
};

export default Nav;
