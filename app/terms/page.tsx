import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/layout/PageShell";

export const metadata = {
  title: "Terms of Service | Akechi Webcraft",
  description: "Terms and conditions for using our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description="Effective Date: June 1, 2026"
      />

      <PageShell className="bg-white">
        <div className="legal-copy mx-auto max-w-3xl">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website&apos;s particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          
          <h2>2. Intellectual Property Rights</h2>
          <p>The site and its original content, features, and functionality are owned by Akechi Webcraft and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
          
          <h2>3. Disclaimer of Warranties</h2>
          <p>The materials on Akechi Webcraft&apos;s website are provided on an &apos;as is&apos; basis. Akechi Webcraft makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          
          <h2>4. Limitations</h2>
          <p>In no event shall Akechi Webcraft or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Akechi Webcraft&apos;s website.</p>
          
          <h2>5. Revisions and Errata</h2>
          <p>The materials appearing on Akechi Webcraft&apos;s website could include technical, typographical, or photographic errors. Akechi Webcraft does not warrant that any of the materials on its website are accurate, complete, or current.</p>
        </div>
      </PageShell>
    </>
  );
}
