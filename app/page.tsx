import Hero from "@/components/home/Hero";
import CoreCapabilities from "@/components/CoreCapabilities";
import FeaturedWork from "@/components/FeaturedWork";
import ImpactMetrics from "@/components/ImpactMetrics";
import Credentials from "@/components/Credentials";
import ATLEcosystem from "@/components/ATLEcosystem";

/**
 * Order answers a buyer's questions in sequence: what do you do, can you prove
 * it, can I trust you, and what else do you run.
 *
 * Two sections were removed rather than reordered. "Who we are" repeated
 * /about almost verbatim, and the insights grid repeated /blog — both are one
 * click away in the nav and the footer. The sticky section-tab bar went with
 * them: it only existed to make an over-long page navigable.
 */
const anchorOffset = "scroll-mt-[100px]";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="capabilities" className={anchorOffset}>
        <CoreCapabilities />
      </div>
      <div id="work" className={anchorOffset}>
        <FeaturedWork />
      </div>
      <div id="impact" className={anchorOffset}>
        <ImpactMetrics />
      </div>
      <div id="credentials" className={anchorOffset}>
        <Credentials />
      </div>
      <div id="ecosystem" className={anchorOffset}>
        <ATLEcosystem />
      </div>
    </>
  );
}
