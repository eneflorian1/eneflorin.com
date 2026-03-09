"use client";

import { useEffect, useRef, useState } from "react";

interface MermaidDiagramProps {
    chart: string;
    caption?: string;
}

export default function MermaidDiagram({ chart, caption }: MermaidDiagramProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        let cancelled = false;

        async function render() {
            try {
                // Dynamically import mermaid
                const mermaid = (await import("mermaid")).default;
                mermaid.initialize({
                    startOnLoad: false,
                    theme: "default",
                    themeVariables: {
                        primaryColor: "#dbeafe",
                        primaryTextColor: "#1e40af",
                        primaryBorderColor: "#93c5fd",
                        lineColor: "#60a5fa",
                        secondaryColor: "#f0fdf4",
                        tertiaryColor: "#fef3c7",
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: "14px",
                    },
                    flowchart: {
                        htmlLabels: true,
                        curve: "basis",
                        padding: 16,
                    },
                });

                if (cancelled || !containerRef.current) return;

                const id = `mermaid-${Date.now()}-${Math.random().toString(36).slice(2)}`;
                const { svg } = await mermaid.render(id, chart);

                if (cancelled || !containerRef.current) return;
                containerRef.current.innerHTML = svg;
                setLoaded(true);
            } catch (e) {
                console.error("Mermaid render error:", e);
                if (!cancelled) setError(true);
            }
        }

        render();
        return () => { cancelled = true; };
    }, [chart]);

    if (error) {
        return (
            <div className="diagram diagram--error">
                <p>Nu s-a putut randa diagrama.</p>
            </div>
        );
    }

    return (
        <div className="diagram">
            {!loaded && (
                <div className="diagram__skeleton">
                    <div className="diagram__skeleton-bar" style={{ width: "60%" }} />
                    <div className="diagram__skeleton-bar" style={{ width: "80%" }} />
                    <div className="diagram__skeleton-bar" style={{ width: "45%" }} />
                    <div className="diagram__skeleton-bar" style={{ width: "70%" }} />
                </div>
            )}
            <div
                ref={containerRef}
                className={`diagram__content ${loaded ? "diagram__content--visible" : ""}`}
            />
            {caption && loaded && (
                <p className="diagram__caption">{caption}</p>
            )}
        </div>
    );
}
