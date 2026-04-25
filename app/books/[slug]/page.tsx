import { getContent } from "../../lib/getContent";
import BookReaderClient from "./BookReaderClient";

export const dynamic = "force-dynamic";

export default function BookPage({ params }: { params: { slug: string } }) {
    const { books } = getContent();
    const book = books.find((b) => b.slug === params.slug) || null;
    return <BookReaderClient book={book} />;
}
