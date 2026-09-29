import Head from 'next/head';
import type { Metadata } from 'next';

export default function SEO() {
  return (
    <Head>
      <title>Goldneez - Creamos Recuerdos Dorados | Café de Especialidad</title>
      <meta name="description" content="Goldneez - Café de especialidad tostado artesanalmente. Seleccionamos los mejores granos de origen único para crear experiencias sensoriales inolvidables." />
      <meta name="keywords" content="café de especialidad, café colombiano, tostión artesanal, café premium, Goldneez, recuerdos dorados, café orgánico, café de origen único" />
      <link rel="canonical" href="https://goldneez.com" />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Goldneez" />
      <meta property="og:title" content="Goldneez - Creamos Recuerdos Dorados | Café de Especialidad" />
      <meta property="og:description" content="Café de especialidad tostado artesanalmente. Seleccionamos los mejores granos de origen único para crear experiencias sensoriales inolvidables." />
      <meta property="og:url" content="https://goldneez.com" />
      <meta property="og:image" content="https://goldneez.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Goldneez - Café de especialidad, creamos recuerdos dorados" />
      <meta property="og:locale" content="es_CO" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@goldneez" />
      <meta name="twitter:creator" content="@goldneez" />
      <meta name="twitter:title" content="Goldneez - Creamamos Recuerdos Dorados" />
      <meta name="twitter:description" content="Café de especialidad tostado artesanalmente. Creamos recuerdos dorados." />
      <meta name="twitter:image" content="https://goldneez.com/og-image.jpg" />
      <meta name="twitter:image:alt" content="Goldneez - Café de especialidad" />
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Goldneez",
          "url": "https://goldneez.com",
          "logo": "https://goldneez.com/logo.png",
          "description": "Café de especialidad tostado artesanalmente. Seleccionamos los mejores granos de origen único.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Carrera 18 #79-47, Oficina 201",
            "addressLocality": "Bogotá D.C.",
            "addressRegion": "Cundinamarca",
            "addressCountry": "CO"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+57-314-562-9141",
            "contactType": "customer service",
            "availableLanguage": ["Spanish", "English"]
          },
          "sameAs": [
            "https://www.instagram.com/goldneez",
            "https://www.facebook.com/goldneez",
            "https://twitter.com/goldneez",
            "https://www.tiktok.com/@goldneez"
          ]
        }
      `}} />
    </Head>
  );
}
