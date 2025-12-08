import { useEffect, useState } from "react"
import Head from 'next/head'

import { Header } from '@/components/Header/Header'
import { HeroSlider} from '@/components/HeroSlider/HeroSlider'
import { CompanyDescription } from '@/components/CompanyDescription/CompanyDescription'
import { MarketingCards } from '@/components/MarketingCards/MarketingCards'
import { ProductTrip } from '@/components/ProductTrip/ProductTrip'
import { Brands } from '@/components/Brands/Brands'
import { FollowUs } from '@/components/FollowUs/FollowUs'
import { Footer } from '@/components/Footer/Footer'

import styles from '@/styles/Page.module.scss'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Head>
        <title>Techoutlet</title>
        <meta
          name="description"
          content="Большой выбор витринной, выставочной и open-box техники. Все устройства проходят диагностику и продаются с гарантией. Качество нового — цена ниже."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-title" content="TechOutlet" />
        <meta name="google-site-verification" content="8WNyalJiWpHAhLjPllIa8jKus5kerEtsCPnSotRy4Fk" />
        <meta property="og:title" content="TechOutlet" />
        <meta property="og:description" content="Большой выбор витринной, выставочной и open-box техники." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicons/logo_blue.png" />
        <meta property="og:url" content="https://techoutlet.by/" />
        <meta property="og:site_name" content="TechOutlet" />
        <meta name="twitter:title" content="TechOutlet" />
        <meta
          name="twitter:description"
          content="Большой выбор витринной, выставочной и open-box техники."
        />
        <meta name="twitter:image" content="/favicons/logo_blue.png" />
        <meta name="twitter:site" content="https://techoutlet.by/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="TechOutlet" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="canonical" href="https://techoutlet.by/" />
      </Head>
      <div
        className={styles.page}
      >
        <Header />
        <main className={styles.main}>
          <HeroSlider mounted={mounted}/>
          <CompanyDescription mounted={mounted}/>
          <MarketingCards mounted={mounted}/>
          <ProductTrip />
          <Brands mounted={mounted}/>
          <FollowUs mounted={mounted}/>
        </main>
        <Footer />
      </div>
    </>
  )
}
