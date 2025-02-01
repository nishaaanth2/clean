// Metadata should be imported but not used as a component
import { Metadata } from 'next'

const title = "Be My Valentine?";
const description = "A simple question, a lifetime of memories—will you say yes?";
const siteUrl = "https://wedlink.co";
const pageUrl = `${siteUrl}/valentine`;
const ogImageUrl = `${siteUrl}/og/valentine.png`;

export const metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  keywords: [
    'valentine card',
    'digital valentine', 
    'wedlink.co/valentine',
    'valentines',
    'valentines day',
    'love',
    'romance',
    'romantic',
    'date',
    'dating',
    'relationship',
    'couple',
    'interactive valentine',
    'share valentine'
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: 'wedlink.co',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Valentine's Day Digital Card Creator",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description, 
    images: [ogImageUrl],
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function ValentineLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}
