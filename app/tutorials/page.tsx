import { getContent } from "../lib/getContent";
import TutorialsClient from "./TutorialsClient";

export const dynamic = "force-dynamic";

export default function TutorialsPage() {
    const { categories, tutorials } = getContent();
    return <TutorialsClient categories={categories} tutorials={tutorials} />;
}
