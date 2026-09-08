import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/data/siteConfig';

interface SEOProps {
  title: string;
  description: string;
  /** Path only, e.g. "/courses/tally-prime-course-vadodara" — the domain is added automatically. */
  path: string;
  /** One or more JSON-LD schema objects (see src/lib/schema.ts) to inject as <script> tags. */
  schema?: object | object[];
  /** Defaults to the site logo; override for a course/blog-specific social share image. */
  image?: string;
}

/**
 * Drop this at the top of every page component to set a unique title, meta
 * description, canonical tag, Open Graph tags, and structured data — this is
 * what SEO audit Section 3.3 refers to as "per-page meta via react-helmet-async".
 *
 * Note: this controls what ships in the <head> once React has run. It does
 * NOT by itself solve the "empty initial HTML" issue described in the audit
 * (Section 3.1) — that requires the separate prerendering/SSG migration.
 * This component is still worth having now because (a) it's a prerequisite
 * for that migration anyway, and (b) Googlebot's own renderer does pick this
 * up even before that work is done.
 */
const SEO = ({ title, description, path, schema, image }: SEOProps) => {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? `${siteConfig.url}/logo.png`;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
