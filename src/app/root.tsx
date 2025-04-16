import React from 'react';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import '#presentation/styles/app.css';

import type { Route } from './+types/root';

import { StarsBackground } from '#presentation/components/animate-ui/stars-background';
import { ClientOnly } from '#presentation/components/client-only';
import {
  starColors,
  type Theme,
  ThemeProvider,
} from '#presentation/components/theme-provider';
import { Navbar } from '#presentation/layout/header';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:wght@400;700&family=Merriweather:wght@400;700&family=Source+Code+Pro:wght@400;700&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>('light');

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={theme}>
        <ThemeProvider theme={theme} setTheme={setTheme}>
          <div className="clouds" />
          <ClientOnly>
            <StarsBackground
              starColor={starColors[theme]}
              className="nature:opacity-85 absolute inset-0 -z-[5] flex items-center justify-center rounded-xl dark:opacity-60 light:opacity-75"
            />
          </ClientOnly>
          {children}
          <ScrollRestoration />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
