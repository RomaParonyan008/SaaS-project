import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nexus - Modern SaaS Platform',
  description: 'Transform your workflow with Nexus. The modern SaaS platform that helps teams ship faster.',
  keywords: ['SaaS', 'productivity', 'workflow', 'collaboration', 'software'],
  authors: [{ name: 'Nexus Team' }],
  openGraph: {
    title: 'Nexus - Modern SaaS Platform',
    description: 'Transform your workflow with Nexus. The modern SaaS platform that helps teams ship faster.',
    url: 'https://nexus.app',
    siteName: 'Nexus',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus - Modern SaaS Platform',
    description: 'Transform your workflow with Nexus. The modern SaaS platform that helps teams ship faster.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}