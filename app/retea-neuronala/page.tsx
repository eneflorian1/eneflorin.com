import Link from "next/link";
import { Header } from "../components/Header";
import { NeuralNetworkBlog } from "../components/NeuralNetworkBlog";
import {
    IconHome,
    IconBook,
    IconUser,
    IconSparkles,
    IconArrowLeft,
} from "../icons";

export default function ReteaNeuronala() {
    return (
        <>
            <Header />

            <main className="page-content" style={{ paddingBottom: '100px' }}>
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
                    <NeuralNetworkBlog />
                </section>
            </main>

            {/* Fixed Bottom Nav */}
            <nav className="nav-bottom">
                <div className="nav-bottom__inner">
                    <Link href="/" className="nav-bottom__item" id="nav-home">
                        <span className="nav-bottom__icon"><IconHome size={22} /></span>
                        <span>Acasă</span>
                    </Link>
                    <Link href="/tutorials" className="nav-bottom__item" id="nav-tutorials">
                        <span className="nav-bottom__icon"><IconBook size={22} /></span>
                        <span>Tutoriale</span>
                    </Link>
                    <Link href="/retea-neuronala" className="nav-bottom__item nav-bottom__item--active" id="nav-astazi">
                        <span className="nav-bottom__icon"><IconSparkles size={22} /></span>
                        <span>Astăzi</span>
                    </Link>
                    <Link href="/despre" className="nav-bottom__item" id="nav-about">
                        <span className="nav-bottom__icon"><IconUser size={22} /></span>
                        <span>Despre</span>
                    </Link>
                </div>
            </nav>
        </>
    );
}
