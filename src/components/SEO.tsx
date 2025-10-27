import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function SEO({ title, description, keywords, ogImage, canonicalUrl }: SEOProps) {
  const siteName = 'ElixirAutoX';
  const fullTitle = `${title} | ${siteName}`;
  const defaultImage = 'https://images.unsplash.com/photo-1705747401901-28363172fe7e?w=1200';
  const baseUrl = 'https://elixirautox.com';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      {canonicalUrl && <meta property="og:url" content={`${baseUrl}${canonicalUrl}`} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {canonicalUrl && <link rel="canonical" href={`${baseUrl}${canonicalUrl}`} />}

      <meta name="robots" content="index, follow" />
      <meta name="author" content="ElixirAutoX" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
}
