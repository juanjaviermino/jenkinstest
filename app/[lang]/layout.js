import { getDictionary } from '@/dictionaries/dictionaries.js';

export async function generateMetadata({ params }) {

  const dict = await getDictionary(params.lang);

  return {
    title: dict.landingPageTitle,
    description: dict.landingPageDescription,
  };
}

export default async function RootLayout({ children, params }) {
  return (
    <html suppressHydrationWarning lang={params.lang}>
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}