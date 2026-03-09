import { IconLink } from "../icons";

export type Tutorial = {
    slug: string;
    title: string;
    description: string;
    category: string;
    date?: string;
    duration?: string;
    badges?: string[];
    icon?: any; // You can use standard icon keys or specific React components
};

export const allTutorials: Tutorial[] = [
    {
        slug: "blockchain",
        title: "Introducere în Blockchain",
        description: "Ce este blockchain-ul, cum funcționează și de ce contează. Un ghid complet pentru începători.",
        category: "Web 4.0",
        date: "9 Mar 2026",
        duration: "8 min lectură · 3 min audio",
        badges: ["text", "audio", "new"],
        icon: "link",
    },
    {
        slug: "ugc",
        title: "UGC - User Generated Content",
        description: "Descoperă cum să creezi, să monetizezi și să distribui conținut generat de utilizatori.",
        category: "UGC",
        date: "În curând",
        duration: "Conținut în pregătire",
        badges: ["new"],
        icon: "link",
    },
    {
        slug: "agenti-ai",
        title: "Agenți AI - Construiește Asistenți Inteligenți",
        description: "Învață să creezi agenți AI autonomi care pot automatiza taskuri complexe și să interacționeze inteligent.",
        category: "Agenți AI",
        date: "În curând",
        duration: "Conținut în pregătire",
        badges: ["new"],
        icon: "link",
    },
    {
        slug: "trading-crypto",
        title: "Trading Crypto - Strategii & Analiză",
        description: "Stăpânește arta tradingului de criptomonede prin strategii dovedite, analiza tehnică și managementul riscului.",
        category: "Trading Crypto",
        date: "În curând",
        duration: "Conținut în pregătire",
        badges: ["new"],
        icon: "link",
    },
    {
        slug: "roboti-umanoizi",
        title: "Roboți Umanoizi - Robotică & Automatizare",
        description: "Explorează fascinanta lume a roboticii umanoide - de la mecanică și electronică până la programare AI.",
        category: "Roboți Umanoizi",
        date: "În curând",
        duration: "Conținut în pregătire",
        badges: ["new"],
        icon: "link",
    },
    {
        slug: "proiectare-cad",
        title: "Proiectare CAD - Design & Modelare 3D",
        description: "Învață să creezi modele 3D profesionale pentru design industrial, prototipare și fabricație.",
        category: "Proiectare CAD",
        date: "În curând",
        duration: "Conținut în pregătire",
        badges: ["new"],
        icon: "link",
    },
];
