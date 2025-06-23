import type { Metadata } from "next"
import ThirdPartyVerificationClientPage from "./ThirdPartyVerificationClientPage"

export const metadata: Metadata = {
  title: "Third-Party Verification Solution | Proofly Insights",
  description:
    "How Proofly's network of local evaluators provides unbiased property verification, creating trust in remote rental transactions.",
  openGraph: {
    title: "Third-Party Verification Solution | Proofly Insights",
    description:
      "How Proofly's network of local evaluators provides unbiased property verification, creating trust in remote rental transactions.",
    type: "article",
  },
}

export default function ThirdPartyVerificationPage() {
  return <ThirdPartyVerificationClientPage />
}
