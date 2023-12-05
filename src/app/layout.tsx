import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Best End of Year Gifts',
  description: 'Recap of the best end of year gifts for you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <head>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER as string}/>
      </head>
      <Script
        id='event-track'
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function(event) {
              // Event tracking pada setiap halaman
              document.querySelectorAll('a').forEach(function(el) {
                el.addEventListener('click', function() {
                  gtag('event', 'click', {
                    'event_category': 'Link',
                    'event_label': el.href,
                    'value': 1
                  });
                });
              });
            });
          `,
        }}
      /> */}
      <body className={spaceGrotesk.className}>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <Providers>
          <main className="dark:light text-foreground bg-background">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
