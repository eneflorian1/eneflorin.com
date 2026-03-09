"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as d3 from 'd3';
import { IconBook, IconSparkles, IconUser } from '../icons';

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
    const [posts, setPosts] = useState<{ id: string, title: string, content: string, domain: string, date: string }[]>([
        {
            id: 'post-1',
            title: 'Conceptul de bază al AI',
            content: 'Inteligența artificială reprezintă capacitatea unei mașini de a imita funcțiile cognitive umane, cum ar fi învățarea și rezolvarea problemelor.',
            domain: 'Inteligență Artificială',
            date: new Date().toISOString()
        },
        {
            id: 'post-2',
            title: 'Ce este un blockchain?',
            content: 'Un blockchain este o bază de date distribuită care menține o listă continuă de înregistrări (blocuri) securizate prin criptografie.',
            domain: 'Web3',
            date: new Date().toISOString()
        }
    ]);

    const [nodes, setNodes] = useState<GraphNode[]>([]);
    const [links, setLinks] = useState<GraphLink[]>([]);

    const svgRef = useRef<SVGSVGElement>(null);
    const simulationRef = useRef<d3.Simulation<GraphNode, GraphLink> | null>(null);

    // Initial graph setup based on posts
    useEffect(() => {
        const uniqueDomains = Array.from(new Set(posts.map(p => p.domain)));

        const newNodes: GraphNode[] = [
            { id: 'root', label: 'Evoluție', group: 'root', val: 20, color: '#8b5cf6' }
        ];
        const newLinks: GraphLink[] = [];

        // Add domain nodes
        uniqueDomains.forEach(domain => {
            newNodes.push({ id: `domain-${domain}`, label: domain, group: 'domain', val: 15, color: '#3b82f6' });
            newLinks.push({ source: 'root', target: `domain-${domain}`, value: 2 });
        });

        // Add post nodes
        posts.forEach(post => {
            newNodes.push({ id: post.id, label: post.title, group: 'post', val: 10, color: '#10b981' });
            newLinks.push({ source: `domain-${post.domain}`, target: post.id, value: 1 });
        });

        setNodes(newNodes);
        setLinks(newLinks);
    }, [posts]);

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
                    {posts.map(post => (
                        <div key={post.id} className="animate-in" style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: '16px',
                            padding: '1.5rem',
                            transition: 'transform 0.2s, background 0.2s',
                            cursor: 'pointer'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                            }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <span style={{
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    color: '#60a5fa',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '999px',
                                    fontSize: '0.75rem',
                                    fontWeight: '500'
                                }}>
                                    {post.domain}
                                </span>
                                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                                    {new Date(post.date).toLocaleDateString()}
                                </span>
                            </div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#f3f4f6', marginBottom: '0.75rem' }}>
                                {post.title}
                            </h3>
                            <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: '1.6' }}>
                                {post.content}
                            </p>
                        </div>
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
