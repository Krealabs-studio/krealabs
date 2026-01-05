export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Krea Labs",
    "url": "https://krealabs.studio",
    "logo": "https://krealabs.studio/Krealabs-black.svg",
    "sameAs": [
      "https://instagram.com/krealabs.studio"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "kelvinchoo96@gmail.com",
      "contactType": "customer service"
    },
    "description": "A one-stop engineering lab building complex ideas from the ground up, specializing in AI, Hard Tech, and Digital Innovation."
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
