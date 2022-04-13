import Head from 'next/head'
import React from 'react'
import Navbar from './navbar/Navbar'
import PersistentDrawerRight from './navbar/Navui'

const siteTitle = 'OPENSEA'
export default function Layout({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title ? title : siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
      </Head>
      <Navbar />
      <PersistentDrawerRight />
      <main>{children}</main>
    </>
  )
}
