import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/layout/PageShell";

export const metadata = {
  title: "Privacy Policy | Akechi Webcraft",
  description: "Our privacy practices and commitments.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="Effective Date: June 1, 2026"
      />

      <PageShell className="bg-white">
        <div className="legal-copy mx-auto max-w-3xl">
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us when you use our website, such as when you fill out a contact form or request a consultation. This may include your name, email address, company name, and project details.</p>
          
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries, provide the services you request, and improve our website and offerings. We do not sell your personal information to third parties.</p>
          
          <h2>3. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>

          <h2>4. Third-Party Services</h2>
          <p>We may use third-party service providers to help us operate our business and the website or administer activities on our behalf. We may share your information with these third parties for those limited purposes provided that you have given us your permission.</p>
          
          <h2>5. Your Rights</h2>
          <p>You have the right to access, update, or delete the personal information we have on you. If you would like to exercise this right, please contact us at{" "}
            <a href="mailto:privacy@akechiwebcraft.com">privacy@akechiwebcraft.com</a>.</p>
        </div>
      </PageShell>
    </>
  );
}
