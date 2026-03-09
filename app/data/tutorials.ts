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
    // Add other future tutorials here to make them searchable
];
