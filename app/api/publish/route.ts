import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const CONTENT_PATH = path.join(process.cwd(), 'app/data/content.json');

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { type, content, secret } = data;

        // Authentication removed as requested by user
        if (!fs.existsSync(CONTENT_PATH)) {
            return NextResponse.json({ error: 'Content file not found' }, { status: 404 });
        }

        const fileContents = fs.readFileSync(CONTENT_PATH, 'utf8');
        const json = JSON.parse(fileContents);

        if (type === 'book') {
            // Check if book already exists by slug
            const index = json.books.findIndex((b: any) => b.slug === content.slug);
            if (index !== -1) {
                json.books[index] = { ...json.books[index], ...content };
            } else {
                json.books.push(content);
            }
        } else if (type === 'tutorial') {
            const index = json.tutorials.findIndex((t: any) => t.slug === content.slug);
            if (index !== -1) {
                json.tutorials[index] = { ...json.tutorials[index], ...content };
            } else {
                json.tutorials.push(content);
            }
        } else {
            return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
        }

        fs.writeFileSync(CONTENT_PATH, JSON.stringify(json, null, 2));

        return NextResponse.json({ success: true, message: `Successfully published ${type}: ${content.title}` });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
