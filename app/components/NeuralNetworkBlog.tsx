"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as d3 from 'd3';
import Link from 'next/link';
import { IconBook, IconSparkles, IconUser } from '../icons';

import contentData from '../data/content.json';

export interface GraphNode extends d3.SimulationNodeDatum {
    id: string;
    label: string;
    group: string;
    val: number;
    color?: string;
}

export interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
    source: string | GraphNode;
    target: string | GraphNode;
    value: number;
}

const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

export function NeuralNetworkBlog() {
    // Combine tutorials and books for the feed
    const allContent = [
        ...contentData.tutorials.map(t => ({ ...t, type: 'tutorial' })),
        ...contentData.books.map(b => ({ ...b, type: 'book' }))
    ].sort((a, b) => {
        const dateA = a.date && a.date !== 'În curând' ? new Date(a.date).getTime() : 0;
        const dateB = b.date && b.date !== 'În curând' ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
    });

    const [nodes, setNodes] = useState<GraphNode[]>([]);
    const [links, setLinks] = useState<GraphLink[]>([]);

    const svgRef = useRef<SVGSVGElement>(null);
    const simulationRef = useRef<d3.Simulation<GraphNode, GraphLink> | null>(null);

    // Initial graph setup based on contentData
    useEffect(() => {
        const newNodes: GraphNode[] = [
            { id: 'root', label: 'Evoluție', group: 'root', val: 20, color: '#8b5cf6' }
        ];
        const newLinks: GraphLink[] = [];

        // Add domain/category nodes
        contentData.categories.forEach(cat => {
            newNodes.push({ id: `domain-${cat.id}`, label: cat.title, group: 'domain', val: 15, color: cat.color });
            newLinks.push({ source: 'root', target: `domain-${cat.id}`, value: 2 });
        });

        // Add tutorial nodes
        contentData.tutorials.forEach(tut => {
            newNodes.push({ id: `tut-${tut.slug}`, label: tut.title, group: 'tutorial', val: 10, color: '#10b981' });
            newLinks.push({ source: `domain-${tut.categoryId}`, target: `tut-${tut.slug}`, value: 1 });
        });

        // Add book nodes
        contentData.books.forEach(book => {
            newNodes.push({ id: `book-${book.slug}`, label: book.title, group: 'book', val: 12, color: '#ec4899' });
            newLinks.push({ source: 'root', target: `book-${book.slug}`, value: 1.5 });
        });

        setNodes(newNodes);
        setLinks(newLinks);
    }, []);

    // D3 force simulation
    useEffect(() => {
        if (!svgRef.current || nodes.length === 0) return;

        const container = svgRef.current.parentElement;
        const width = container ? container.clientWidth : 800;
        const height = container ? container.clientHeight || 500 : 500;

        // Cleanup old SVG
        d3.select(svgRef.current).selectAll("*").remove();

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height]);

        // Add zoom
        const zoom = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.5, 4])
            .on("zoom", (event) => {
                g.attr("transform", event.transform);
            });

        svg.call(zoom);

        const g = svg.append("g");

        // Force simulation
        const simulation = d3.forceSimulation<GraphNode>(nodes)
            .force("link", d3.forceLink<GraphNode, GraphLink>(links).id(d => d.id).distance(d => d.value * 50).strength(0.5))
            .force("charge", d3.forceManyBody().strength(-200))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collide", d3.forceCollide().radius(d => (d as GraphNode).val + 10).iterations(2));

        simulationRef.current = simulation;

        // Draw links
        const link = g.append("g")
            .attr("stroke", "rgba(139, 92, 246, 0.3)")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value));

        // Draw nodes
        const node = g.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("g")
            .data(nodes)
            .join("g")
            .call(drag(simulation) as any);

        node.append("circle")
            .attr("r", d => d.val)
            .attr("fill", d => d.color || colorScale(d.group));

        node.append("text")
            .attr("x", 8)
            .attr("y", "0.31em")
            .text(d => d.label)
            .attr("font-size", "12px")
            .attr("fill", "#e5e7eb")
            .attr("stroke", "none")
            .clone(true)
            .lower()
            .attr("fill", "none")
            .attr("stroke", "#111827")
            .attr("stroke-width", 3);

        simulation.on("tick", () => {
            link
                .attr("x1", d => (d.source as GraphNode).x!)
                .attr("y1", d => (d.source as GraphNode).y!)
                .attr("x2", d => (d.target as GraphNode).x!)
                .attr("y2", d => (d.target as GraphNode).y!);

            node
                .attr("transform", d => `translate(${d.x},${d.y})`);
        });

        // Setup resize observer
        const resizeObserver = new ResizeObserver(entries => {
            if (entries.length > 0 && simulationRef.current) {
                const { width, height } = entries[0].contentRect;
                svg.attr("width", width).attr("height", height).attr("viewBox", [0, 0, width, height]);
                simulationRef.current.force("center", d3.forceCenter(width / 2, height / 2));
                simulationRef.current.alpha(0.3).restart();
            }
        });

        if (container) {
            resizeObserver.observe(container);
        }

        return () => {
            simulation.stop();
            if (container) resizeObserver.unobserve(container);
        };
    }, [nodes, links]);

    // Drag behavior for d3 nodes
    function drag(simulation: d3.Simulation<GraphNode, GraphLink>) {
        function dragstarted(event: any, d: any) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event: any, d: any) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event: any, d: any) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Top section: Blog Feed */}
            <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '8px', height: '24px', background: '#3b82f6', borderRadius: '4px' }}></div>
                    Cronologia Informației
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {allContent.map((item: any) => (
                        <Link 
                            href={item.type === 'book' ? `/books/${item.slug}` : `/tutorials/${item.slug}`}
                            key={item.slug} 
                            className="animate-in" 
                            style={{
                                display: 'block',
                                textDecoration: 'none',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '16px',
                                padding: '1.5rem',
                                transition: 'transform 0.2s, background 0.2s',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <span style={{
                                    background: item.type === 'book' ? 'rgba(236, 72, 153, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                                    color: item.type === 'book' ? '#ec4899' : '#10b981',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '999px',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase'
                                }}>
                                    {item.type}
                                </span>
                                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                                    {item.date}
                                </span>
                            </div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#f3f4f6', marginBottom: '0.75rem' }}>
                                {item.title}
                            </h3>
                            <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: '1.6' }}>
                                {item.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Bottom section: Neural Network Visualization */}
            <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '8px', height: '24px', background: '#8b5cf6', borderRadius: '4px' }}></div>
                    Conexiuni Neurale
                </h2>

                <div style={{
                    position: 'relative',
                    background: 'rgba(17, 24, 39, 0.4)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(139, 92, 246, 0.1)',
                    borderRadius: '24px',
                    height: '500px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <svg ref={svgRef} style={{ width: '100%', height: '100%', cursor: 'grab' }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '1rem',
                        left: '1rem',
                        background: 'rgba(0,0,0,0.5)',
                        padding: '0.5rem 1rem',
                        borderRadius: '999px',
                        fontSize: '0.75rem',
                        color: '#9ca3af',
                        pointerEvents: 'none'
                    }}>
                        Trage pentru a explora. Zoom cu scroll.
                    </div>
                </div>
            </div>
        </div>
    );
}
