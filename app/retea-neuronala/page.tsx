import Link from "next/link";
import { PageWrapper } from "../components/PageWrapper";
import { NeuralNetworkBlog } from "../components/NeuralNetworkBlog";
import {
    IconArrowLeft,
} from "../icons";
import { getContent } from "../lib/getContent";

export const dynamic = "force-dynamic";

export default function ReteaNeuronala() {
    const content = getContent();
    return (
        <PageWrapper>
            <section className="hero" style={{ padding: '2rem 0 1rem' }}>
                <div className="container">
                    <Link href="/despre" className="article__back animate-in" id="back-to-despre" style={{ marginBottom: '1rem' }}>
                        <IconArrowLeft size={16} /> Înapoi
                    </Link>

                    <div className="hero__content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '2rem' }}>
                        <h1 className="hero__title animate-in">
                            Astăzi — <span className="gradient-text">Rețeaua Neuronală</span>
                        </h1>
                        <p className="hero__description animate-in animate-delay-1" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            Adaugă cunoștințe noi în rețea. Fiecare domeniu este un nod conectat ce reflectă evoluția informației tale în timp real.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container animate-in animate-delay-2">
                <NeuralNetworkBlog content={content} />
            </section>
        </PageWrapper>
    );
}
