import { getContent } from "./lib/getContent";
import HomeClient from "./HomeClient";

export const dynamic = "force-dynamic";

export default function Home() {
  const { books, tutorials } = getContent();
  const recentBooks = books.slice(0, 3);
  return <HomeClient recentBooks={recentBooks} totalBooks={books.length} totalTutorials={tutorials.length} />;
}
