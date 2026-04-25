import fs from 'fs';
import path from 'path';

export interface Category {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    color: string;
    bgColor: string;
    borderColor: string;
    comingSoon?: boolean;
}

export interface Tutorial {
    slug: string;
    title: string;
    description: string;
    categoryId: string;
    date?: string;
    duration?: string;
    badges?: string[];
    content?: string;
    audioUrl?: string;
}

export interface BookChapter {
    title: string;
    content: string;
}

export interface Book {
    slug: string;
    title: string;
    description: string;
    author: string;
    date: string;
    chapters: BookChapter[];
}

export interface SiteContent {
    categories: Category[];
    tutorials: Tutorial[];
    books: Book[];
}

const CONTENT_PATH = path.join(process.cwd(), 'app/data/content.json');

export function getContent(): SiteContent {
    const raw = fs.readFileSync(CONTENT_PATH, 'utf8');
    return JSON.parse(raw) as SiteContent;
}
