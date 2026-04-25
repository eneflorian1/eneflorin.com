import { getContent } from "../lib/getContent";
import BooksClient from "./BooksClient";

export const dynamic = "force-dynamic";

export default function BooksPage() {
    const { books } = getContent();
    return <BooksClient books={books} />;
}
