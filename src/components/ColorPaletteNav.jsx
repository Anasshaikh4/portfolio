import React, { useState, useEffect } from "react";
import "./ColorPaletteNav.css";

const items = [
    { id: "about", color: "purple", label: "About" },
    { id: "projects", color: "blue", label: "Projects" },
    { id: "experience", color: "green", label: "Experience" },
    { id: "contact", color: "yellow", label: "Contact" },
];

export default function ColorPaletteNav() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            const isScrolled = window.scrollY > 100;
            setScrolled(isScrolled);
            if (isScrolled) setOpen(false);
        };

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    const handleClick = (id) => {
        setOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div style={{
           
            minHeight: "100vh"
        }}>
            <div className={`palette-nav ${open ? "open" : ""} ${scrolled ? "scrolled" : ""}`}>
                <div
                    className="swatch-toggle"
                    onClick={() => setOpen((o) => !o)}
                    aria-label="Menu"
                >
                    Go to
                </div>

                {items.map((it, i) => (
                    <div
                        key={it.id}
                        className={`swatch-item item-${i}`}
                        style={{ backgroundColor: `var(--${it.color})` }}
                        onClick={() => handleClick(it.id)}
                    >
                        <span className="label">{it.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
