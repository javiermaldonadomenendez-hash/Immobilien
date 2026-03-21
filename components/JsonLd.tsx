export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Maldonado & Winz Immobilien',
  url: 'https://maldonado-winz.de',
  logo: 'https://maldonado-winz.de/logo.png',
  image: 'https://maldonado-winz.de/og-image.jpg',
  telephone: '+4920112345678',
  email: 'info@maldonado-winz.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rüttenscheider Str. 52',
    addressLocality: 'Essen',
    postalCode: '45130',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.4319,
    longitude: 6.9995,
  },
  areaServed: ['Essen', 'Bochum', 'Duisburg', 'Mülheim', 'Ruhrgebiet', 'NRW'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '84',
    bestRating: '5',
  },
  sameAs: [
    'https://www.instagram.com/maldonadowinz',
    'https://www.linkedin.com/company/maldonado-winz',
  ],
}
