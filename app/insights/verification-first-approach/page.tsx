import VerificationFirstClientPage from "./VerificationFirstClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Verification-First Approach | Proofly Insights",
  description:
    "How Proofly's verification-first approach revolutionizes rental decisions by ensuring viewing happens before paying, not after.",
  openGraph: {
    title: "Verification-First Approach | Proofly Insights",
    description:
      "How Proofly's verification-first approach revolutionizes rental decisions by ensuring viewing happens before paying, not after.",
    type: "article",
  },
}

export default function VerificationFirstPage() {
  return <VerificationFirstClientPage />
}
