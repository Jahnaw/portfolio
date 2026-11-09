import type { Metadata } from "next";
import { personal } from "@/config/portfolio";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/page-header";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${personal.name} about software engineering opportunities, backend and full-stack roles, or technical collaboration.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        lede="I'm currently open to SDE, backend and full-stack opportunities. Reach out through email or connect with me on LinkedIn."
      />
      <Contact />
    </>
  );
}
