"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { IconSearch } from "../icons";
import { allTutorials } from "../data/tutorials";

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            setQuery("");
            setTimeout(() => inputRef.current?.focus(), 100);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const filteredTutorials = allTutorials.filter((t) =>
        t.title.toLowerCase().includes(query.toLowerCase()) ||
        t.description.toLowerCase().includes(query.toLowerCase()) ||
        t.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="search-modal-overlay" onClick={onClose}>
            <div className="search-modal-content animate-in" onClick={(e) => e.stopPropagation()}>
                <div className="search-modal-header">
                    <div className="search-input-wrapper">
                        <IconSearch size={18} className="search-icon" />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Caută tutoriale..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="search-input"
                        />
                        {query && (
                            <button className="search-clear" onClick={() => setQuery("")}>
                                &times;
                            </button>
                        )}
                    </div>
                    <button className="search-cancel" onClick={onClose}>
                        Anulare
                    </button>
                </div>

                <div className="search-results">
                    {query.trim() === "" ? (
                        <div className="search-empty-state">
                            <p>Caută după titlu, descriere sau categorie.</p>
                        </div>
                    ) : filteredTutorials.length > 0 ? (
                        <div className="search-results-list">
                            {filteredTutorials.map((tut) => (
                                <Link
                                    key={tut.slug}
                                    href={`/tutorials/${tut.slug}`}
                                    className="search-result-item"
                                    onClick={onClose}
                                >
                                    <div className="search-result-info">
                                        <h4>{tut.title}</h4>
                                        <p>{tut.category}</p>
                                    </div>
                                    <div className="search-result-arrow">
                                        &rarr;
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="search-empty-state">
                            <p>Niciun rezultat găsit pentru "{query}".</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
