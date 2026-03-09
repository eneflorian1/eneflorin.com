"use client";

import { useState, useEffect } from "react";

interface LanguageToggleProps {
    onChange?: (lang: "ro" | "en") => void;
}

export default function LanguageToggle({ onChange }: LanguageToggleProps) {
    const [lang, setLang] = useState<"ro" | "en">("ro");

    useEffect(() => {
        const saved = localStorage.getItem("tutorial-lang");
        if (saved === "en" || saved === "ro") {
            setLang(saved);
            onChange?.(saved);
        }
    }, []);

    const toggle = () => {
        const next = lang === "ro" ? "en" : "ro";
        setLang(next);
        localStorage.setItem("tutorial-lang", next);
        onChange?.(next);
    };

    return (
        <button className="lang-toggle" onClick={toggle} aria-label="Toggle language">
            <span className={`lang-toggle__option ${lang === "ro" ? "lang-toggle__option--active" : ""}`}>
                RO
            </span>
            <span className={`lang-toggle__option ${lang === "en" ? "lang-toggle__option--active" : ""}`}>
                EN
            </span>
            <span
                className="lang-toggle__slider"
                style={{ transform: lang === "en" ? "translateX(100%)" : "translateX(0)" }}
            />
        </button>
    );
}
