import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business, contactCards, media } from "@/data/site";

export function ContactView() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Visit the showroom or ask about a room."
        body="A conversion-focused contact page with business hours, enquiry form, location section and a map placeholder ready for a Google Maps embed."
        image={media.carpet}
      />
      <section className="bg-ivory px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Showroom details"
              title="Derby Road, Chesterfield."
              body="Use this section to drive phone calls, map taps and high-intent showroom visits."
            />
            <div className="mt-8 grid gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="flex gap-4 rounded-[1.5rem] bg-white p-5 shadow-card">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-linen text-bronze">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-charcoal">{card.title}</p>
                      <p className="mt-1 text-sm leading-6 text-taupe">{card.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 rounded-[1.5rem] bg-charcoal p-6 text-ivory">
              <p className="font-display text-3xl font-semibold">Opening hours</p>
              <div className="mt-5 grid gap-2 text-sm">
                {business.hours.map(([day, time]) => (
                  <div key={day} className="flex justify-between gap-4 border-b border-white/10 pb-2">
                    <span>{day}</span>
                    <span className="text-ivory/70">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-showroom md:p-8">
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-charcoal">
                  Name
                  <input className="h-12 rounded-full border border-charcoal/10 px-4 outline-none focus:ring-2 focus:ring-bronze" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-charcoal">
                  Phone
                  <input className="h-12 rounded-full border border-charcoal/10 px-4 outline-none focus:ring-2 focus:ring-bronze" />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-charcoal">
                Email
                <input type="email" className="h-12 rounded-full border border-charcoal/10 px-4 outline-none focus:ring-2 focus:ring-bronze" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-charcoal">
                What are you looking for?
                <textarea className="min-h-36 rounded-[1.5rem] border border-charcoal/10 p-4 outline-none focus:ring-2 focus:ring-bronze" />
              </label>
              <Button type="submit">
                Send enquiry
              </Button>
            </form>
            <div className="mt-8 grid min-h-72 place-items-center rounded-[1.5rem] bg-linen p-6 text-center">
              <div>
                <Send className="mx-auto h-8 w-8 text-bronze" />
                <p className="mt-4 font-display text-3xl font-semibold text-charcoal">Google Maps embed</p>
                <p className="mt-2 text-sm leading-6 text-taupe">{business.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
