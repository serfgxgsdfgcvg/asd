import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export default function SEOHead({
  title = "Theo Blondel - Solutions Créatives polyvalente | Médiamaticien Créatif",
  description = "Solutions créatives polyvalente - Médiamaticien basé en Suisse. Création d'identités visuelles, interfaces utilisateur et expériences digitales authentiques.",
  keywords = "solutions créatives, médiamaticien, identité de marque, design suisse, création visuelle, interface utilisateur, expérience utilisateur, Vevey, Suisse",
  image = "https://theoblondel.ch/og-image.jpg",
  url = "https://theoblondel.ch/",
  type = "website",
  author = "Theo Blondel",
  publishedTime,
  modifiedTime
}: SEOHeadProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Theo Blondel",
    "jobTitle": "Solutions Créatives polyvalente",
    "description": description,
    "url": url,
    "image": image,
    "sameAs": [
      "https://www.linkedin.com/in/theo-blondel-6952432aa/",
      "https://www.behance.net/theoblondel",
      "https://www.instagram.com/theo.blondel/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CH",
      "addressLocality": "Vevey"
    },
    "email": "hello@theoblondel.ch",
    "telephone": "+41761234567",
    "knowsAbout": [
      "Design Graphique",
      "UI/UX Design",
      "Identité de Marque",
      "Design d'Interface",
      "Expérience Utilisateur",
      "Design Suisse",
      "Médiamatique",
      "Création Visuelle",
      "Motion Graphics",
      "Print Design"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Solutions Créatives polyvalente",
      "occupationLocation": {
        "@type": "Country",
        "name": "Switzerland"
      },
      "skills": [
        "Adobe Creative Suite",
        "Figma",
        "Sketch",
        "Prototypage",
        "Design Thinking",
        "Branding",
        "Typography",
        "Color Theory",
        "Motion Graphics",
        "Print Design"
      ]
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Theo Blondel Portfolio" />
      <meta property="og:locale" content="fr_CH" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@theoblondel" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.pexels.com" />
      <link rel="preconnect" href="https://www.behance.net" />

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </Helmet>
  );
}