export const productExternalUrls = {
  urgaa: 'https://www.urgaa.in',
  gstsaas: 'https://www.gstsaas.in',
  ignition: 'https://app.eka-ai.in',
  arjun: 'https://www.gstsaas.in',
  'kailash-ai': 'https://www.kailash-ai.in',
  'eka-ai': 'https://www.eka-ai.in',
} as const;

export type ProductExternalSlug = keyof typeof productExternalUrls;

export function getProductExternalUrl(slug?: string) {
  if (!slug) return undefined;
  return productExternalUrls[slug as ProductExternalSlug];
}

export function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}
