import type { Metadata } from "next"
import RentalMarketCrisisClientPage from "./RentalMarketCrisisClientPage"

export const metadata: Metadata = {
  title: "The Rental Market Crisis | Proofly Insights",
  description:
    "Understanding the trust crisis in Canada's rental market and how it affects tenants, landlords, and the broader housing ecosystem.",
  openGraph: {
    title: "The Rental Market Crisis | Proofly Insights",
    description:
      "Understanding the trust crisis in Canada's rental market and how it affects tenants, landlords, and the broader housing ecosystem.",
    type: "article",
  },
}

export default function RentalMarketCrisisPage() {
  return <RentalMarketCrisisClientPage />
}
