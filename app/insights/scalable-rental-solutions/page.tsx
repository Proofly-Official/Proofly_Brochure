import type { Metadata } from "next"
import ScalableRentalSolutionsClientPage from "./ScalableRentalSolutionsClientPage"

export const metadata: Metadata = {
  title: "Scalable Rental Solutions | Proofly Insights",
  description:
    "How Proofly's verification system scales beyond individual rentals to transform entire property portfolios and institutional housing.",
  openGraph: {
    title: "Scalable Rental Solutions | Proofly Insights",
    description:
      "How Proofly's verification system scales beyond individual rentals to transform entire property portfolios and institutional housing.",
    type: "article",
  },
}

export default function ScalableRentalSolutionsPage() {
  return <ScalableRentalSolutionsClientPage />
}
