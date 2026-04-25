import { getContent } from "./lib/getContent";
import HomeClient from "./HomeClient";

export const dynamic = "force-dynamic";

export default function Home() {
  const { books, tutorials } = getContent();
  return <HomeClient totalBooks={books.length} totalTutorials={tutorials.length} />;
}

