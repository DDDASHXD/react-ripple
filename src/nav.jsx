import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const [active, setActive] = useState(0);
    const [cords, setCords] = useState({ x: 0, y: 0 });
    const links = [
        { label: "Documentation", href: "/documentation" },
        { label: "Component props", href: "/props" },
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
