import { siteConfig } from '@/data/siteConfig';
import type { Course } from '@/data/courses';

/**
 * JSON-LD structured-data generators — see SEO audit Section 3.6.
 * Each function returns a plain object; render it with:
 *   <script type="application/ld+json">{JSON.stringify(getXSchema(...))}</script>
 * (the SEO.tsx component below does this automatically via its `schema` prop).
 */

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.line1,
      addressLocality: siteConfig.contact.address.locality,
      addressRegion: siteConfig.contact.address.region,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    openingHours: 'Mo-Sa 08:00-20:00',
    sameAs: Object.values(siteConfig.social).filter((url) => url && url !== '#'),
  };
}

export function getCourseSchema(course: Course) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.details.overview,
    provider: {
      '@type': 'EducationalOrganization',
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Onsite',
      location: {
        '@type': 'Place',
        name: `${siteConfig.name}, Ajwa Road`,
        address: siteConfig.contact.address.full,
      },
    },
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
