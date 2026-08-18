import Reveal from "@/components/Reveal";

const INDUSTRIES = [
  { name: "Small & Mid-Sized Business", body: "A dependable local production partner." },
  { name: "Enterprise", body: "Scalable systems, consistency, and ordering controls." },
  { name: "Multi-Location Brands", body: "Physical brand consistency across every site." },
  { name: "Restaurants & Hospitality", body: "Menus, signs, displays, packaging, graphics." },
  { name: "Healthcare", body: "Forms, patient materials, signage, direct mail." },
  { name: "Real Estate & Development", body: "Signs, presentation materials, site graphics." },
  { name: "Architecture & Engineering", body: "3D models, plans, laser-cut components." },
  { name: "Agencies & Designers", body: "A production partner that protects the work." },
  { name: "Manufacturers", body: "Labels, manuals, identification, packaging." },
  { name: "Events", body: "Signage, displays, programs, credentials." },
  { name: "Education", body: "Publications, signage, direct mail, programs." },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <Reveal>
          <h2 className="font-display max-w-2xl text-3xl uppercase leading-tight text-navy-deep md:text-4xl">
            Defined by the problem, not the product.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-0 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal
              key={ind.name}
              delay={i * 0.03}
              className="group border-b border-border py-7 pr-6 lg:border-r lg:py-8 lg:pl-6 lg:[&:nth-child(3n)]:border-r-0"
            >
              <span className="block h-[2px] w-6 origin-left scale-x-0 bg-lavender transition-transform duration-300 group-hover:scale-x-100" />
              <p className="font-display mt-3 text-lg uppercase text-navy-deep">
                {ind.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {ind.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
