import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Dunning Sequence Optimizer — Recover Failed Payments Faster',
  description: 'Analyze failed payment patterns, optimize retry timing, and customize dunning emails by failure reason. Built for SaaS companies with $10K+ MRR.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="519ef216-0370-45c5-8bf7-8977e039a780"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
