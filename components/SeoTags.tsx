'use client'
import React from 'react'

type Props = {
  title?: string
  description?: string
  url?: string
  image?: string
}
export default function SeoTags({
  title = 'ISHARA Umra Service - Riyadh Batha',
  description = 'Guided Umrah packages with scholar-led tours, Kerala food, and accommodation near both Harams.',
  url = 'https://ishara-umra.vercel.app',
  image = '/placeholder-hero.jpg'
}: Props) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3b8e62" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ISHARA Umra Service" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  )
}