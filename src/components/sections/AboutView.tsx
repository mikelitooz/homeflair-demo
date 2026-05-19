import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business, media, stats } from "@/data/site";

export function AboutView() {
  return (
    <main>
      <PageHero
        eyebrow="About the showroom"
        title="A friendly family-run furniture business in Rotherham since 1972."
        body="Homeflair is a trusted local furniture retailer with over 50 years of experience, offering quality sofas, leather suites and exclusive rattan garden furniture."
        image={media.showroom}
      />
      <section className="bg-ivory px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-showroom">
              <Image src={media.sofaWall} alt="Sofa and living room furniture" fill sizes="50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="The positioning"
              title="High choice, clear advice, comfortable buying."
              body="The site avoids generic catalogue noise and focuses on showroom confidence: what they sell, how customers are helped, and why visiting or calling feels easy."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] bg-white p-6 shadow-card">
                  <p className="font-display text-4xl font-semibold text-charcoal">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-taupe">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-linen px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Business profile" title="Built around verified local details." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Location", business.address],
              ["Rating", `${business.rating} from ${business.reviews}`],
              ["Offer", "Furniture, home essentials, delivery and assembly"]
            ].map(([title, value]) => (
              <div key={title} className="rounded-[1.5rem] bg-white p-6 shadow-card">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-bronze">{title}</p>
                <p className="mt-4 text-lg font-semibold leading-7 text-charcoal">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
