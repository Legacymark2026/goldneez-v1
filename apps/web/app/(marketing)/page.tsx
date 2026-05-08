import { FuturisticHero } from "@/components/sections/futuristic-hero";
import { OrganizationSchema, WebSiteSchema, FAQSchema } from "@/components/seo/structured-data";
import { siteConfig } from "@/lib/site-config";
import { getRecentProjects, getRecentPosts } from "@/lib/data";
import { getExperts } from "@/actions/experts";
import { Link } from "@/i18n/navigation";
import dynamic from "next/dynamic";

// ── OPTIMIZATION: Progressive Hydration ──────────────────
// Below-the-fold sections are loaded dynamically to prioritize 
// the FuturisticHero (LCP) and reduce the initial JS execution time.

const StrategicAlliances = dynamic(() => import("@/components/sections/strategic-alliances").then(mod => mod.StrategicAlliances));
const BentoServices = dynamic(() => import("@/components/sections/bento-services").then(mod => mod.BentoServices));
const OmnichannelShowcase = dynamic(() => import("@/components/sections/omnichannel-showcase").then(mod => mod.OmnichannelShowcase));
const ValueProposition = dynamic(() => import("@/components/sections/value-proposition").then(mod => mod.ValueProposition));
const CaseStudies = dynamic(() => import("@/components/sections/case-studies").then(mod => mod.CaseStudies));
const Methodology = dynamic(() => import("@/components/sections/methodology").then(mod => mod.Methodology));
const LatestPosts = dynamic(() => import("@/components/sections/latest-posts").then(mod => mod.LatestPosts));
const PortfolioPreview = dynamic(() => import("@/components/sections/portfolio-preview").then(mod => mod.PortfolioPreview));
const TestimonialSlider = dynamic(() => import("@/components/sections/testimonial-slider").then(mod => mod.TestimonialSlider));
const TeamGrid = dynamic(() => import("@/components/sections/team-grid").then(mod => mod.TeamGrid));
const FaqAccordion = dynamic(() => import("@/components/sections/faq-accordion").then(mod => mod.FaqAccordion));
const Stats = dynamic(() => import("@/components/sections/stats").then(mod => mod.Stats));
const CTA = dynamic(() => import("@/components/sections/cta").then(mod => mod.CTA));

export default async function HomePage() {
    const projects = await getRecentProjects(4);
    const posts = await getRecentPosts(3);
    const experts = await getExperts();

    return (
        <main className="bg-black">
            <OrganizationSchema
                name={siteConfig.name}
                url={siteConfig.url}
                logo={`${siteConfig.url}/logo.png`}
                sameAs={[
                    siteConfig.links.linkedin,
                    siteConfig.links.facebook,
                    siteConfig.links.instagram,
                    siteConfig.links.whatsapp
                ]}
                description={siteConfig.description}
            />
            <WebSiteSchema
                name={siteConfig.name}
                url={siteConfig.url}
                searchUrl={`${siteConfig.url}/search?q={search_term_string}`}
            />
            <FAQSchema
                questions={[
                    { question: "¿Qué tipo de café ofrecen?", answer: "Ofrecemos café 100% colombiano de Toledo, Norte de Santander. Tenemos café en grano, molido, yCapsulas de la más alta calidad tipo exportación." },
                    { question: "¿De dónde viene el café GoldNeez?", answer: "Nuestro café viene directamente de las fincas de Toledo, Norte de Santander. Trabajamos con agricultores locales para garantizar un café de origen controlado y sostenible." },
                    { question: "¿Hacen envíos a todo Colombia?", answer: "Sí, hacemos envíos a todo Colombia. El café se tuesta y envía en máximo 48 horas para garantizar frescura." },
                    { question: "¿Qué métodos de pago aceptan?", answer: "Aceptamos pagos con Stripe, MercadoPago, y transferencias. También puedes ordenar directamente por WhatsApp." },
                    { question: "¿Ofrecen café para empresas o locales?", answer: "Sí, temos opciones B2B para cafeterías, restaurantes y oficinas. Contáctanos por WhatsApp para cotización." }
                ]}
            />

            {/* 12. Dense Editorial Noise */}
            <div className="bg-noise fixed inset-0 z-50 pointer-events-none mix-blend-multiply opacity-[0.015]" />

            {/* Global Spotlight Glow for "Wow Factor" */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(255,191,0,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />

            <div data-ga-section="hero"><FuturisticHero /></div>

            <div data-ga-section="lead-magnet">
                <section className="py-16 bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border-y border-amber-500/20">
                    <div className="max-w-4xl mx-auto text-center px-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-4 border border-amber-500/20">
                            ☕ CAFÉ FRESCO
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Café Premium de Toledo, Norte de Santander
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Disfruta del mejor café colombiano tipo exportación.直接de lafinca a tu taza.
<Link 
                            href="/productos"
                            className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
                        >
                            Ver Productos ☕
                        </Link>
                    </div>
                </section>
            </div>

            <div className="relative z-10 space-y-0 pb-32">
                <div data-ga-section="alianzas"><StrategicAlliances /></div>
                <div data-ga-section="servicios"><BentoServices /></div>
                <div data-ga-section="omnichannel"><OmnichannelShowcase /></div>
                <div data-ga-section="estadisticas"><Stats /></div>
                <div data-ga-section="propuesta-valor"><ValueProposition /></div>
                <div data-ga-section="casos-de-exito"><CaseStudies /></div>
                <div data-ga-section="testimonios"><TestimonialSlider /></div>

                {/* Grid Background for Tech Section - Dark Mode */}
                <div className="relative">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none mix-blend-screen -z-10" />
                    <div data-ga-section="metodologia"><Methodology /></div>
                </div>

                <div data-ga-section="equipo"><TeamGrid experts={experts} /></div>
                <div data-ga-section="faq"><FaqAccordion /></div>
                <div data-ga-section="cta-principal"><CTA /></div>
                <div data-ga-section="portfolio-preview"><PortfolioPreview projects={projects} /></div>
                <div data-ga-section="blog-preview"><LatestPosts posts={posts} /></div>
            </div>
        </main>
    );
}
