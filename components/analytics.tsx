'use client'

import { useEffect } from 'react'
import Script from 'next/script'

// Google Analytics component
export function GoogleAnalytics({ gtmId }: { gtmId: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtmId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
}

// Google Tag Manager component
export function GoogleTagManager({ gtmId }: { gtmId: string }) {
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}
      </Script>
      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      }} />
    </>
  )
}

// Facebook Pixel component
export function FacebookPixel({ pixelId }: { pixelId: string }) {
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixelId)
        ReactPixel.pageView()
      })
  }, [pixelId])

  return (
    <Script id="facebook-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');
      `}
    </Script>
  )
}

// Combined Analytics component
interface AnalyticsProps {
  gtmId?: string
  gaId?: string
  fbPixelId?: string
}

export function Analytics({ gtmId, gaId, fbPixelId }: AnalyticsProps) {
  return (
    <>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      {gaId && <GoogleAnalytics gtmId={gaId} />}
      {fbPixelId && <FacebookPixel pixelId={fbPixelId} />}
    </>
  )
}

// Event tracking utilities
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    })
  }
}

// Custom events for temple website
export const trackDonation = (amount: number, method: string) => {
  trackEvent('donation', {
    event_category: 'engagement',
    event_label: method,
    value: amount,
  })
}

export const trackEventRegistration = (eventName: string) => {
  trackEvent('event_registration', {
    event_category: 'engagement',
    event_label: eventName,
  })
}

export const trackNewsletterSignup = () => {
  trackEvent('newsletter_signup', {
    event_category: 'engagement',
  })
}