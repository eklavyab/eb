import Link from "next/link";
import { navigation, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ivory">
      <div className="container-luxe pt-20 pb-8 md:pt-28">
        <div className="grid gap-12 border-t border-ivory/15 pt-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl leading-snug text-ivory/90 md:text-3xl">
              Strategy, storytelling &amp; digital experiences for brands with something to say.
            </p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <p className="eyebrow mb-5 text-taupe">Index</p>
            <ul className="space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="eyebrow mb-5 text-taupe">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="link-underline">
                  {site.email}
                </a>
              </li>
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="link-underline">
                    {s.label}
                  </a>
                </li>
              ))}
              <li className="text-ivory/60">{site.location}</li>
            </ul>
          </div>
        </div>

        <p
          className="display mt-20 select-none whitespace-nowrap text-center text-[clamp(3.5rem,17vw,19rem)] leading-[0.8] text-ivory/95 md:mt-28"
          aria-hidden
        >
          {site.name}
        </p>

        <div className="eyebrow mt-10 flex flex-col gap-3 text-[0.6rem] text-ivory/50 sm:flex-row sm:justify-between">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>{site.title}</span>
        </div>
      </div>
    </footer>
  );
}
