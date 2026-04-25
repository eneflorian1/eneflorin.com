import { getContent } from "../../lib/getContent";
import TutorialReaderClient from "./TutorialReaderClient";

export const dynamic = "force-dynamic";

export default function TutorialPage({ params }: { params: { slug: string } }) {
    const { tutorials, categories } = getContent();
    const tutorial = tutorials.find((t) => t.slug === params.slug) || null;
    const category = tutorial ? categories.find((c) => c.id === tutorial.categoryId) || null : null;
    return <TutorialReaderClient tutorial={tutorial} category={category} />;
}
