import type { Metadata } from "next"
import PerfectMarketTimingClient from "./PerfectMarketTimingClient"

export const metadata: Metadata = {
  title: "Perfect Market Timing | Proofly Insights",
  description:
    "Why now is the perfect time for Proofly's rental verification solution, at the intersection of remote work, housing affordability, and fintech innovation.",
  openGraph: {
    title: "Perfect Market Timing | Proofly Insights",
    description:
      "Why now is the perfect time for Proofly's rental verification solution, at the intersection of remote work, housing affordability, and fintech innovation.",
    type: "article",
  },
}

export default function PerfectMarketTimingPage() {
  return <PerfectMarketTimingClient />
}
